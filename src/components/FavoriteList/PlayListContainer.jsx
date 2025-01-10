import { useState } from "react"
import FavoriteCard from "./favotiteCard"


function PlayListContainer({favoriteList}) {

    const [isPlaying, setIsPlaying] = useState(null);
    

    return (
        <section  className="card-container w-full rounded-lg  bg-primary-400 flex flex-col ">
            
            <div className="flex current-radio border-solid gap-2 pl-11 py-3 pl-8 items-center">
                {isPlaying ? (
                    <>
                        <div className="icon bg-black h-6 w-6 rounded-md"></div>
                        <p className="name text-2xl font-bold">{isPlaying.name}</p>
                    </>
                ) : (
                    <p className="name text-2xl font-bold">Nenhuma rádio tocando</p>
                    )
                }
            </div>

            <div className="bg-slate-400 h-1 opacity-20"></div>

            <div className="list py-2 truncate">

                {favoriteList?.map((station, index) => (
                    <div key={index}>
                        <FavoriteCard 
                            isPlaying={isPlaying} 
                            handlePlaying={setIsPlaying}
                            station={station}   />
                    </div>
                ))}

            </div>


        </section>
    )
}
  
  export default PlayListContainer