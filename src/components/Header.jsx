import { navLinks } from "../constants/navLinks.js";
import { logo } from "../assets/index.js";
import { IoIosArrowDropdown } from "react-icons/io";

export default function Header() {
  return (
    <header className="">
      <nav>
        {/* Navigation Logo */}
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>

        {/* Navigation Links */}
        <div className="nav_links">
          {navLinks.map((link) => (
            <div key={link.label} className="nav_parent">
              {link.label}

              {link.childrens && link.childrens.length > 0 && (
                <IoIosArrowDropdown />
              )}

              {link.childrens && (
                <div className="nav_childerns">
                  {link.childrens &&
                    link.childrens.length > 0 &&
                    link.childrens.map((children) => (
                      <div key={children.label} className="">
                        {children.label}
                      </div>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}
