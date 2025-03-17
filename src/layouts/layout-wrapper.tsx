import { ReactNode } from "react";

interface LayoutWrapperProps {
  children: ReactNode;
  layout: React.ComponentType<{ children: ReactNode }>;
}

const LayoutWrapper = ({ children, layout: Layout }: LayoutWrapperProps) => {
  return <Layout>{children}</Layout>;
};

export default LayoutWrapper;
