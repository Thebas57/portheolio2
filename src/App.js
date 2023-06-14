import { useState } from "react";
import Routes from "./components/Routes";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    console.log(isDarkTheme);
  };
  return <Routes theme={isDarkTheme} handleTheme={handleTheme} />;
}

export default App;
