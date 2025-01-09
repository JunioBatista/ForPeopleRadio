/* eslint-disable react/prop-types */
import Check from "../../assets/Icons/check.svg"

function StationCard({station}) {

    return (
        <div className="h-12 px-4 card-container w-full rounded-lg bg-primary-500  flex items-center justify-between">

            <p className="text-white-900 ">{station.name}</p>
            <img src={Check} alt="My Icon" />

        </div>
    )
}
  
  export default StationCard