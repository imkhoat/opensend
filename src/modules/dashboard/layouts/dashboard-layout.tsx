import TheHeader from "@/components/extends/the-header";
import { ReactNode } from "react";
import { LayoutActions } from "@/modules/dashboard/components/layout-actions";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex flex-col justify-start items-stretch min-h-screen bg-slate-50">
      <TheHeader>
        <LayoutActions />
      </TheHeader>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
