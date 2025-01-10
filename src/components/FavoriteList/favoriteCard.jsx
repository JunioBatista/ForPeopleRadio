import { useState } from "react";
import editIcon from "../../assets/Icons/pencil.svg"
import deleteIcon from "../../assets/Icons/trash.svg"
import { useFavorites } from "../../contexts/favoriteContext";

function FavoriteCard({ station, isPlaying, handlePlaying }) {

    const [isEditing, setIsediting] = useState(false)
    const [newName, setNewName] = useState('')
    const [newCountry, setNewCountry] = useState('')

    const { favoriteList, setFavoriteList } = useFavorites();
    
    const handleSaveButton = () => {
    
        const updatedList = favoriteList.map(i => 
            i.changeuuid === station.changeuuid
                ? { ...i, name: newName, country: newCountry, countryCode: '' } 
                : i 
        );
    
        setFavoriteList(updatedList);

        setIsediting(false);
    };

    const handleClick = (station) => {
        if(isPlaying?.changeuuid === station.changeuuid )  { 
            handlePlaying(null); 
            setIsediting(false)
        }
        else { handlePlaying(station); }
    };

    const handleEdit = (booleanAction) => {
        setIsediting(booleanAction)
    };

    const handleDelete = () => {

        const updatedList = favoriteList.filter(i => i.changeuuid !== station.changeuuid);
        setFavoriteList(updatedList);

    };

    const handleNameChange = (e) => {
        setNewName(e.target.value)
    }

    const handleCountryChange = (e) => {
        setNewCountry(e.target.value) 
    }

    const handleCancelButton = () => { 
        setIsediting(false)
    }

    return ( 
        <>
            <div
                className="h-14 p-2 w-full card-container min-w-fit rounded-sm bg-primary-500 pl-6 flex items-center truncate max-w-full"
            >
                <div className="player" onClick={() => handleClick(station)}>
                    <div className="h-10 w-10 flex items-center justify-center bg-primary-600 rounded-full">
                        { isPlaying?.changeuuid === station?.changeuuid ? (
                            <div className="h-4 w-4 bg-black square"></div>
                        ) : (
                            <div
                                className="triangle"
                                style={{
                                    width: 0,
                                    height: 0,
                                    borderTop: "12px solid transparent",
                                    borderBottom: "12px solid transparent",
                                    borderLeft: "18px solid black",
                                }}
                            />
                        ) }
                    </div>
                </div>
                <div onClick={() => handleClick(station)} className="pl-6 flex flex-col justify-start grow ">
                    <span className="font-bold text-lxl text-left truncate">{station.name}</span>
                    <span className="text-left text-lxl text-clip truncate">{station.country}, {station.countrycode}</span>
                </div>
                {isPlaying?.changeuuid === station.changeuuid &&(
                    <div className="actions flex padding gap-4 p-2 mx-2 justify-self-end">
                        <img src={editIcon} onClick = { () => handleEdit(true) } alt="edit icon"></img>
                        <img src={deleteIcon} onClick = { () => handleDelete() } alt="delete icon"></img>
                    </div>
                )}

            </div>

            {(isPlaying?.changeuuid === station.changeuuid && isEditing) && (
                <div className="mx-auto bg-primary-500 p-6 rounded-lg shadow-lg flex flex-col ">
                    <div className=" w-full flex gap-2">
                        <div className="mb-4 w-full">
                            <label className="block text-sm font-medium text-gray-700">Nome</label>
                            <input type="text" value={newName} onChange={handleNameChange}  id="name" className="bg-primary-600 text-white-900 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Novo nome" />
                        </div>

                        <div className="mb-4 w-full">
                            <label  className="block text-sm font-medium w-full text-gray-700">País</label>
                            <input  value={newCountry} onChange={handleCountryChange} type="text" id="country" name="country" className="w-full text-white-900 bg-primary-600 mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Novo país" />
                        </div>
                    </div>

                    <div className=" flex gap-2 ">
                        <button onClick={handleSaveButton} className="w-full bg-secondary-800 text-sm text-white-900 hover:bg-blue-700 text-white py-1 px-4 rounded-md">Salvar</button>
                        <button onClick={handleCancelButton} className="w-full bg-secondary-800 text-sm text-white-900 hover:bg-blue-700 text-white py-1 px-4 rounded-md">Cancelar</button>
                    </div>

                </div>
            )}


        </>
    );
}

export default FavoriteCard;