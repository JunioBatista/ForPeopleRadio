import StationCard from "../List/stationCard";


function StationList({list}) {

  return (
      <ul className="p-4 flex flex-col gap-2">
      {list?.map((station, index) => (
        <StationCard station={station} key={index}/>
      ))}
    </ul>
  )

}
  
  export default StationList