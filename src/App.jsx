import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggler from "./ThemeToggler";
import Content from "./Content";

function App() {
  return (
    <ThemeProvider>
    <div>
        <ThemeToggler />
        <Content />
    </div>
    </ThemeProvider>
  );
}



export default App;