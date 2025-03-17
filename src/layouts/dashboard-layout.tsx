import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-gray-800 text-white p-4">Dashboard Sidebar</aside>
      <div className="flex-1">
        <header className="bg-blue-600 text-white p-4">Dashboard Header</header>
        <main className="p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
