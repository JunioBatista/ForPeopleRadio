
function FavoriteCard({ station, isPlaying, handlePlaying }) {

    const handleClick = (station) => {
        // eslint-disable-next-line react/prop-types
        if(isPlaying?.changeuuid === station.changeuuid )  { handlePlaying(null); }
        else { handlePlaying(station); }
    };

    return (
        <div
            onClick={() => handleClick(station)}
            className="h-14 m-2 w-3/3 card-container min-w-fit rounded-sm bg-primary-500 pl-6 flex items-center truncate"
        >
            <div className="player">
                <div className="h-10 w-10 flex items-center justify-center bg-primary-600 rounded-full">
                    { isPlaying?.changeuuid === station.changeuuid ? (
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
            <div className="pl-6 flex flex-col justify-start">
                <span className="font-bold text-lxl text-left truncate">{station.name}</span>
                <span className="text-left text-lxl text-clip truncate">{station.country}, {station.countrycode}</span>
            </div>
        </div>
    );
}

export default FavoriteCard;