import "./App.css";

import { Routes, Route } from "react-router-dom";
import { MainOutlet } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainOutlet />}>
          <Route path="/" element={<h2>Home page</h2>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
