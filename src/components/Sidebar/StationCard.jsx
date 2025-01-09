/* eslint-disable react/prop-types */
import Check from "../../assets/Icons/check.svg"
import { useFavorites } from "../../contexts/favoriteContext";

function StationCard({station}) {
    const { addOrRemoveFavorite, favoriteList } = useFavorites();
    const isFavorite = favoriteList.some(
        (item) => station.changeuuid === item.changeuuid
      );

    const handleOnClick = (itemAddOrRemove) => {        
        
        addOrRemoveFavorite(itemAddOrRemove)

    }

    

    return (
        <div onClick= { ()=> handleOnClick(station)} className="h-12 px-4 card-container w-full rounded-lg bg-primary-500  flex items-center justify-between">

            <p className="text-white-900 ">{station.name}</p>
            {isFavorite && <img src={Check} alt="My Icon" />}

        </div>
    )
}
  
  export default StationCard