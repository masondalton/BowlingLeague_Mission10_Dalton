import { useState } from "react";
import "./App.css";
import BowlerList from "./BowlerList";
import Heading from "./Heading";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Heading />
      <BowlerList />
    </>
  );
}

export default App;
