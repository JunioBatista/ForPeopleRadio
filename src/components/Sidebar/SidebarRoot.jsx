import HamburgerMenu from "./MenuHamburguer"

function SidebarRoot() {

    return (

        <div className="sidebar-container bg-black-800 w-1/3">
            <div className=" h-20 w-full p-2 flex justify-end items-center">
                <HamburgerMenu />
            </div>
        </div>

    )
  }
  
  export default SidebarRoot
  