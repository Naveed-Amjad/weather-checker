import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FetchData from "./FetchData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <h1 class="text-3xl font-bold underline text-blue-600">Hello world</h1> */}
      <FetchData />
    </div>
  );
}

export default App;
