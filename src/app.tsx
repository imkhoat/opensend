import LoginPage from "@/modules/auth/pages/login";
import ModeToggle from "@/components/extends/mode-toggle";

function App() {
  return (
    <main className="bg-secondary">
      <header className="flex justify-end p-4">
        <ModeToggle />
      </header>
      <div className="font-display flex flex-col justify-center items-center h-screen mx-auto gap-2">
        <LoginPage />
      </div>
    </main>
  );
}

export default App;
