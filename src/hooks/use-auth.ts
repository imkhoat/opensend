import { useEffect, useState } from "react";
import { AuthResponse } from "@/types/auth-type";

export const useAuth = () => {
  const [authData, setAuthData] = useState<AuthResponse | null>(localStorage.getItem("authData") ? JSON.parse(localStorage.getItem("authData") || "") : null);

  useEffect(() => {
    const storedData = localStorage.getItem("authData");
    if (storedData) {
      setAuthData(JSON.parse(storedData));
    }
  }, []);

  return authData;
};