import './App.css'
import Home from './pages/home/home'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


const queryClient = new QueryClient()

function App() {



  return (
    <>
      <QueryClientProvider client = {queryClient} >
        < Home />
      </QueryClientProvider>
    </>
  )
}

export default App
