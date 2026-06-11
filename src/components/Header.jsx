import { navLinks } from "../constants/navLinks.js";

export default function Header() {
  return (
    <header>
      <nav>
        {/* Navigation Logo */}
        <div className="logo">
          <img src="../assets/images/logo.png" alt="Company Logo" />
        </div>

        {/* Navigation Links */}
        <div className="">
          {navLinks.map((link) => (
            <a href={""}>{link.label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}
