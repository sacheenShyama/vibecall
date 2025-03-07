import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./app/routes/Router";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <ModeToggle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
