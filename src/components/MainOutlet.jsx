import { Outlet } from "react-router-dom";
import { Header, Footer } from "./index.js";

export default function MainOutlet() {
  return (
    <>
      {/* Main container */}
      <main className="container">
        {/* Header Section  */}
        <Header />
        {/* Outlet/Children */}
        <Outlet />
        {/* Footer Section */}
        <Footer />
      </main>
    </>
  );
}
