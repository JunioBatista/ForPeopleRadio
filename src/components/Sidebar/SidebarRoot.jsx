import StationList from "./StationList"
import HamburgerMenu from "./MenuHamburguer"
import SearchInput from "../Shared/SearchInput"
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

function SidebarRoot({changeSection}) {

    const [radioslist, setRadios] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    let placeholdertext = "Search here"
    
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

    const handleChangeView = (event) => {
        changeSection('favorit')
    };


    const currentList = searchValue.length > 0 ? filteredList : radioslist


    return (

        <aside className="sidebar-container bg-primary-900 w-auto p-2 w-full h-screen">
            <div className=" h-20 w-full p-2 flex justify-end items-center">
                <HamburgerMenu changeView={handleChangeView} />
            </div>
                <SearchInput 
                    value={searchValue} 
                    onChange={handleSearchChange}
                    placeHolderText={placeholdertext}
                />
            <div>
                <StationList list = {currentList} />
            </div>
            
        </aside>

    )
  }
  
  export default SidebarRoot
  