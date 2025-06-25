import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./app/routes/Router";
import DotGrid from "./components/parentBackgroud/DotGrid/DotGrid";

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          <DotGrid
            dotSize={2}
            gap={15}
            baseColor="#fff"
            activeColor="#000"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
