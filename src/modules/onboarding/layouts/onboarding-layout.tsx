import { ReactNode } from "react";
import TheHeader from '@/components/extends/the-header';

interface OnboardingLayoutProps {
  children: ReactNode;
}

const OnboardingLayout = ({ children }: OnboardingLayoutProps) => {
  return (
    <div className="flex flex-col justify-start items-stretch min-h-screen bg-slate-50">
      <TheHeader>
      </TheHeader>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default OnboardingLayout;
