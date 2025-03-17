import { ReactNode } from "react";
import TheHeader from '@/components/extends/the-header';

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return (
    <div className="flex flex-col justify-start items-stretch min-h-screen">
      <TheHeader />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default ClientLayout;
