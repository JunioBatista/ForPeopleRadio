import { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  
  const [favoriteList, setFavoriteList] = useState([]);

  const addOrRemoveFavorite = (SelectedStation) => {

    setFavoriteList((prevFavoriteList) => {
      const isFavorite = prevFavoriteList.some(
        (station) => station.changeuuid === SelectedStation.changeuuid
      );

      if (isFavorite) {
        return prevFavoriteList.filter(
          (station) => station.changeuuid !== SelectedStation.changeuuid
        );
      } else {
        return [...prevFavoriteList, SelectedStation];
      }
      
    });
  };


  return (
    <FavoritesContext.Provider value={{ favoriteList, addOrRemoveFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);