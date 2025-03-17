import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "@/store/api/auth-api";
import dashboardReducer from "@/modules/dashboard/store/dashboard-slice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    dashboard: dashboardReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;