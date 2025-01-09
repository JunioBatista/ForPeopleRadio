import { useFavorites } from "../../contexts/favoriteContext";
import StationCard from "../Sidebar/StationCard";

function List() {

  const { favoriteList } = useFavorites();

  return (
    <section className="w-full bg-primary-500 p-9">
      <h1>Radio Browser</h1>
      <div className="subheader flex justify-between">
        <spam>Favorite Radios</spam>
        <spam>search Radios</spam>
      </div>

      <div className="fav-list-container">
        <h2>Radio Atual</h2>
        <div className="favlist">

        </div>
      </div>
      {favoriteList?.map((station, index) => (
        <div key={index}>
          <StationCard station={station}   />
        </div>
      ))}
      
    </section>
  )
}

export default List
