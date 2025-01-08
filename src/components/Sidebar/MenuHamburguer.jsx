import { useState } from "react";

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <div>
          <div
            onClick={toggleMenu}
            className="relative grid place-content-center max-w-full cursor-pointer"
          >
            <div
              className={`relative w-12 h-2  rounded-full transition-all duration-150 ${
                isOpen ? "bg-black-800" : "bg-blue-800"
              }`}
            >
              {/* Barra superior */}
              <div
                className={`absolute w-12 h-2 bg-blue-800 rounded-full transition-all duration-150 ${
                  isOpen ? "rotate-45 translate-y-0" : "-translate-y-4"
                }`}
              ></div>
              {/* Barra inferior */}
              <div
                className={`absolute w-12 h-2 bg-blue-800 rounded-full transition-all duration-150 ${
                  isOpen ? "-rotate-45 translate-y-0" : "translate-y-4"
                }`}
              ></div>
            </div>
          </div>

        </div>
      </div>
    );
  };
  
  export default HamburgerMenu;