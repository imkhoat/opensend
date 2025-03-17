import BrandLogo from "@/components/icon/logo";
import ModeToggle from "@/components/extends/mode-toggle";
import { useAuth } from "@/hooks/use-auth";
import UserLogout from "@/components/extends/user-logout"
export default function TheHeader({
  children,
}: {
  children?: React.ReactNode;
}) {
  const authData = useAuth();
  return (
    <header className="flex flex-row items-center justify-between px-6 py-4 border-b shadow-sm bg-background">
      <BrandLogo />
      <nav className="flex-grow"></nav>
      <div>{children}</div>
      <div className="flex flex-row justify-end items-center gap-2">
      <ModeToggle />
      {authData ? (<UserLogout />) : null}
      </div>
    </header>
  );
}
