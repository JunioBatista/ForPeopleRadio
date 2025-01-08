//import { useState } from 'react'

import List from "../../components/List/ListRoot"
import Sidebar from "../../components/Sidebar/SidebarRoot"


function Home() {
  //const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen flex">
      < Sidebar />
      < List />
    </div>
  )
}

export default Home