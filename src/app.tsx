import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "@/layouts/default-layout";
import LayoutWrapper from "@/layouts/layout-wrapper";
import AdminLayout from "@/modules/admin/layouts/admin-layout";
import OnboardingLayout from "@/modules/onboarding/layouts/onboarding-layout";
import DashboardLayout from "@/modules/dashboard/layouts/dashboard-layout";
import Login from "@/modules/auth/pages/login";
import Dashboard from "@/modules/dashboard/pages/dashboard";
import Admin from "@/modules/admin/pages/admin";
import Onboarding from "@/modules/onboarding/pages/onboarding";
import Home from "@/modules/home/pages/home";
import ProtectedRoute from "@/components/extends/protected-route";

const routes = [
  {
    path: "/",
    element: <Home />,
    layout: DefaultLayout,
    isProtected: false,
  },
  {
    path: "/login",
    element: <Login />,
    layout: DefaultLayout,
    isProtected: false,
  },
  {
    path: "/admin",
    element: <Admin />,
    layout: AdminLayout,
    isProtected: true,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    layout: DashboardLayout,
    isProtected: true,
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
    layout: OnboardingLayout,
    isProtected: true,
  },
];

const AppLayout = () => {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element, layout: Layout, isProtected }) =>
          isProtected ? (
            <Route key={path} element={<ProtectedRoute />}>
              <Route
                path={path}
                element={
                  <LayoutWrapper layout={Layout}>{element}</LayoutWrapper>
                }
              />
            </Route>
          ) : (
            <Route
              key={path}
              path={path}
              element={<LayoutWrapper layout={Layout}>{element}</LayoutWrapper>}
            />
          )
        )}
      </Routes>
    </Router>
  );
};

export default AppLayout;
