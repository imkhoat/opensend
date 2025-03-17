import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const useAuthRedirect = () => {
  const authData = useAuth();
  const navigate = useNavigate();
  const [hasFetched, setHasFetched] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false); // Mặc định chặn hiển thị FormLogin

  useEffect(() => {
    if (!authData || hasFetched) {
      return;
    }

    setIsRedirecting(true);

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
        .then((res) => {
          console.log('store.onboarding_procedure?.onboarding_status', res.store?.onboarding_procedure?.onboarding_status);
          const onboardingStatus = res.store?.onboarding_procedure?.onboarding_status || "PENDING";

          // Cập nhật authData trong localStorage
          const updatedAuthData = {
            ...authData,
            onboarding_status: onboardingStatus,
          };
          localStorage.setItem("authData", JSON.stringify(updatedAuthData));

          if (onboardingStatus !== "DONE") {
            redirectTo("/onboarding");
          } else {
            redirectTo("/dashboard");
          }
        })
        .catch((error) => {
          console.error("Error fetching store info:", error);
          setHasFetched(false);
          setIsRedirecting(false);
        });
    }
    else {
      setIsRedirecting(false);
    }

  }, [authData, navigate, hasFetched]);

  return { isRedirecting };
};
