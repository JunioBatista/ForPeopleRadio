import StationCard from "./StationCard";


function StationList({ list }) {



  return (
    <ul className="p-4 flex flex-col gap-2">

      {list?.map((station, index) => (
        <div key={index}>
          <StationCard station={station}   />
        </div>
      ))}
      
    </ul>
  )

}
  
  export default StationList