import { Outlet } from "react-router-dom";
import { Header, Footer } from "./index.js";

export default function MainOutlet() {
  return (
    <>
      {/* Header Section  */}
      <Header />

      {/* Outlet/Children */}
      <Outlet />

      {/* Footer Section */}
      <Footer />
    </>
  );
}
