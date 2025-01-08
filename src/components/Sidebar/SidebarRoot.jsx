import StationList from "../List/stationList"
import HamburgerMenu from "./MenuHamburguer"
import SearchInput from "./SearchInput"

function SidebarRoot() {

    return (

        <section className="sidebar-container bg-primary-800 w-1/3 p-2">
            <div className=" h-20 w-full p-2 flex justify-end items-center">
                <HamburgerMenu />
            </div>
                <SearchInput />
            <div>
                <StationList />
            </div>
            
        </section>

    )
  }
  
  export default SidebarRoot
  