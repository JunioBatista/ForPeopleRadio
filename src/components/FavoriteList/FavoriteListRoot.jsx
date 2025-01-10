import { useEffect, useState } from "react";
import { useFavorites } from "../../contexts/favoriteContext";
import SearchInput from "../Shared/SearchInput";
import SearchIcon from "../../assets/Icons/search.svg"
import PlayListContainer from "./PlayListContainer";

function FavoriteListRoot({changeSection}) {

  const { favoriteList } = useFavorites();
  const [searchValue, setSearchValue] = useState('');
  const [filteredFavorites, setFilteredFavorites] = useState('');

  let placeholdertext = "Search stations"

  useEffect(() => {

    if (searchValue === '') {
      setFilteredFavorites(favoriteList);  
    } else {
      setFilteredFavorites(
          favoriteList.filter(station =>
            station.name.toLowerCase().includes(searchValue.toLowerCase()) 
          )
      );
    }
  }, [searchValue, favoriteList]);


  let listToRender = searchValue.length > 0 ? filteredFavorites : favoriteList

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleChangeView = () => {
    changeSection('sidebar');
  };

  return (
    <section className="w-full  bg-primary-800 p-9">
      
      <p className="text-3xl pb-6 text-white-900 font-medium">Radio Browser</p>

      <div className="subheader flex items-end justify-between py-1">
        <p className="text-sm text-center text-white-900">FAVORITE RADIOS</p>
        <div className="flex items-center items-end">

          <img src={SearchIcon} onClick = { () => handleChangeView() } alt="serach icon"></img>
          <div className="hidden sm:inline" >
            <SearchInput 
              value={searchValue} 
              onChange={handleSearchChange}
              placeHolderText={placeholdertext}/>
          </div>
        </div>
      </div>

      <PlayListContainer favoriteList={listToRender} />:

    </section>
  )
}

export default FavoriteListRoot
