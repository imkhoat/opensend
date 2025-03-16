import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Credentials, AuthResponse } from "@/types/auth-type";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      const accessToken = localStorage.getItem("accessToken");
      const clientToken = localStorage.getItem("clientToken");
      if (accessToken) {
        headers.set("Access-Token", `Bearer ${accessToken}`);
      }
      if (clientToken) {
        headers.set("Client-Token", clientToken);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, Credentials>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("accessToken", data.tokens.accessToken);
          localStorage.setItem("clientToken", data.tokens.clientToken);
        } catch (error) {
          console.error("Login failed", error);
        }
      },
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: "auth/logout",
        method: "POST",
      }),
      async onQueryStarted() {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("clientToken");
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
