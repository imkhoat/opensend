import { useState } from "react";
import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        {count}
        <Button onClick={() => setCount((count) => count + 1)}>
          Increment
        </Button>
      </div>
    </>
  );
}

export default App;
