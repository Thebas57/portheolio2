import { useState } from "react";
import Routes from "./components/Routes";
import Cursor from "./components/Cursor";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    console.log(isDarkTheme);
  };
  return (
    <div>
      <Routes theme={isDarkTheme} handleTheme={handleTheme} /> <Cursor />
    </div>
  );
}

export default App;
