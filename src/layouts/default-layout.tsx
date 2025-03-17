import { ReactNode } from "react";
import TheHeader from '@/components/extends/the-header';

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex flex-col justify-start items-stretch min-h-screen bg-slate-50">
      <TheHeader />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default DefaultLayout;
