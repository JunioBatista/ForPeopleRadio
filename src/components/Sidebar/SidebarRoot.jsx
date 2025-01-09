import StationList from "./StationList"
import HamburgerMenu from "./MenuHamburguer"
import SearchInput from "./SearchInput"
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

function SidebarRoot() {

    const [radioslist, setRadios] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    
    const queryClient = useQueryClient();


    useEffect(() => {
  
        const cachedRadios = queryClient.getQueryData(['radios']);
        if (cachedRadios.data) {
          setRadios(cachedRadios.data);
        }
    
    }, [queryClient]); 

    useEffect(() => {

        if (searchValue === '') {
            setFilteredList(radioslist);  
        } else {
            setFilteredList(
                radioslist.filter(station =>
                    station.name.toLowerCase().includes(searchValue.toLowerCase()) 
                )
            );
        }
    }, [searchValue, radioslist]);
          

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    };

    const currentList = filteredList.length > 0 ? filteredList : radioslist


    return (

        <aside className="sidebar-container bg-primary-800 w-1/3 p-2">
            <div className=" h-20 w-full p-2 flex justify-end items-center">
                <HamburgerMenu />
            </div>
                <SearchInput value={searchValue} onChange={handleSearchChange} />
            <div>
                <StationList list = {currentList} />
            </div>
            
        </aside>

    )
  }
  
  export default SidebarRoot
  