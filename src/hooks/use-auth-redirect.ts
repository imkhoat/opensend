import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const useAuthRedirect = () => {
  const authData = useAuth();
  const navigate = useNavigate();
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (!authData || hasFetched) return;

    const redirectTo = (path: string) => {
      setHasFetched(true); // Đánh dấu đã xử lý redirect
      navigate(path, { replace: true });
    };

    if (authData.view.type === "ADMIN") {
      redirectTo("/admin");
    } else if (
      authData.view.type === "CLIENT" &&
      authData.accesses?.length > 0 &&
      authData.accesses[0].store_id
    ) {
      setHasFetched(true);

      fetch(`${BASE_URL}/store/${authData.accesses[0].store_id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Token": `Bearer ${localStorage.getItem("accessToken") || ""}`,
          "Client-Token": localStorage.getItem("clientToken") || "",
        },
      })
        .then((res) => res.json())
        .then((store) => {
          if (store.onboarding_procedure?.onboarding_status !== "DONE") {
            redirectTo("/onboarding");
          } else {
            redirectTo("/dashboard");
          }
        })
        .catch((error) => {
          console.error("Error fetching store info:", error);
          setHasFetched(false);
        });
    }
  }, [authData, navigate, hasFetched]);
};
