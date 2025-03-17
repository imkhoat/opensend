import TheHeader from "@/components/extends/the-header";
import { ReactNode } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  return (
    <div className="flex flex-col justify-start items-stretch min-h-screen bg-slate-50">
      <TheHeader />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default AdminLayout;
