import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="font-display flex flex-col justify-center items-center h-screen mx-auto w-1/2 gap-2">
        {count}
        <Button color="brand" onClick={() => setCount((count) => count + 1)}>
          Increment
        </Button>
        <Input type="email" placeholder="Email" />
      </div>
    </>
  );
}

export default App;
