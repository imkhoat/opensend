import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useLogoutMutation } from "@/store/api/auth-api";
import { useEffect } from "react";

const Logout = () => {
  const navigate = useNavigate();
  const [logout, { isSuccess }] = useLogoutMutation();

  useEffect(() => {
    if (isSuccess) {
      navigate("/login", { replace: true });
    }
  }, [isSuccess, navigate]);
  
  const handleLogout = async () => {
    // Xóa token khỏi localStorage
    await logout();
  };

  return (
    <Button variant="destructive" onClick={handleLogout} className="flex items-center gap-2">
      <LogOut className="w-5 h-5" />
      Logout
    </Button>
  );
};

export default Logout;
