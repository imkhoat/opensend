import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "@/components//extends/protected-route";
import AdminPage from "@/modules/admin/pages/admin";
import Dashboard from "@/modules/dashboard/pages/dashboard";
import Onboarding from "@/modules/onboarding/pages/onboarding";
import Login from "@/modules/auth/pages/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Các route yêu cầu đăng nhập */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Route>

        {/* Route mặc định nếu không khớp */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
