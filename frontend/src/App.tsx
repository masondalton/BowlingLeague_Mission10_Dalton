import { useState } from "react";
import "./App.css";
import BowlerList from "./BowlerList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BowlerList />
    </>
  );
}

export default App;
