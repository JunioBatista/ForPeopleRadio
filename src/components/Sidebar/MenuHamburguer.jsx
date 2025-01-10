import { useState } from "react";

const HamburgerMenu = ({changeView}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      changeView()
    };
  
    return (
      <div>
        <div>
          <div
            onClick={toggleMenu}
            className="relative grid place-content-center max-w-full cursor-pointer"
          >
            <div
              className={`relative w-10 h-1.5  rounded-full transition-all duration-150 ${
                isOpen ? "bg-primary-900" : "bg-secondary-800"
              }`}
            >

              <div
                className={`absolute w-10 h-1.5 bg-secondary-800 rounded-full transition-all duration-150 ${
                  isOpen ? "rotate-45 translate-y-0" : "-translate-y-4"
                }`}
              ></div>

              <div
                className={`absolute w-10 h-1.5 bg-secondary-800 rounded-full transition-all duration-150 ${
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