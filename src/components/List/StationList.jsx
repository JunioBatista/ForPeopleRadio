import StationCard from "./stationCard"

function StationList() {

    const stationList = [{"changeuuid":"647c930b-ba03-4723-8807-496e548fea45","stationuuid":"db93a00f-9191-46ab-9e87-ec9b373b3eee","serveruuid":"629e3689-1876-437e-8177-f4e9c5713082","name":"\tArrow Classic Rock","url":"http://stream.gal.io/arrow","url_resolved":"http://stream.gal.io/arrow","homepage":"https://www.arrow.nl/","favicon":"https://www.arrow.nl/wp-content/uploads/2020/08/logo.png","tags":"","country":"The Netherlands","countrycode":"NL","iso_3166_2":null,"state":"","language":"","languagecodes":"","votes":34,"lastchangetime":"2024-12-09 17:24:25","lastchangetime_iso8601":"2024-12-09T17:24:25Z","codec":"MP3","bitrate":192,"hls":0,"lastcheckok":1,"lastchecktime":"2025-01-08 02:32:51","lastchecktime_iso8601":"2025-01-08T02:32:51Z","lastcheckoktime":"2025-01-08 02:32:51","lastcheckoktime_iso8601":"2025-01-08T02:32:51Z","lastlocalchecktime":"2025-01-08 02:24:05","lastlocalchecktime_iso8601":"2025-01-08T02:24:05Z","clicktimestamp":"2025-01-08 22:40:30","clicktimestamp_iso8601":"2025-01-08T22:40:30Z","clickcount":100,"clicktrend":4,"ssl_error":0,"geo_lat":52.07963259545092,"geo_long":4.303894042968751,"geo_distance":null,"has_extended_info":false}]

    return (
        <ul className="p-4 flex flex-col gap-2">
        {stationList.map((station, index) => (
         <StationCard station={station} key={index}/>
        ))}
      </ul>
    )
  }
  
  export default StationList