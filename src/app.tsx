import LoginPage from "@/modules/auth/pages/login";
function App() {
  return (
    <main className="bg-secondary">
      <div className="font-display flex flex-col justify-center items-center h-screen mx-auto gap-2">
        <LoginPage />
      </div>
    </main>
  );
}

export default App;
