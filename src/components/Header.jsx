import { navLinks } from "../constants/navLinks.js";
import { logo } from "../assets/index.js";
import { IoIosArrowDropdown } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { TiThMenuOutline } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="">
      <nav>
        {/* Navigation Logo */}
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>

        {/* Navigation Links */}
        <div className={`nav_links ${isOpen ? "show" : ""}`}>
          {navLinks.map((link) =>
            link.path ? (
              <a key={link.label} href={link.path}>
                {link.label}
              </a>
            ) : (
              <div key={link.label} className="nav_parent">
                {link.label}

                {link.childrens && link.childrens.length > 0 && (
                  <IoIosArrowDropdown />
                )}

                <div className="nav_childerns">
                  {link.childrens.map((children) => (
                    <a href={children.path} key={children.label} className="">
                      {children.label}
                    </a>
                  ))}
                </div>
              </div>
            ),
          )}

          <div className="menu-close" onClick={() => setIsOpen(false)}>
            <IoClose />
          </div>
        </div>

        {/* Hamburger */}
        <div className="menu-open" onClick={() => setIsOpen(true)}>
          <TiThMenuOutline />
        </div>
      </nav>
    </header>
  );
}
