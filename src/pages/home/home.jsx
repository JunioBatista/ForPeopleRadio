import { useQuery } from "@tanstack/react-query";
import List from "../../components/List/ListRoot";
import Sidebar from "../../components/Sidebar/SidebarRoot";
import RadioService from '../../services/radio-service'; 

const fetchRadios = async () => {
    return await RadioService.getRadios(10);
};

function Home() {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['radios'],
        queryFn: fetchRadios,
      });
    
      if (isLoading) return <p>Carregando...</p>;
      if (isError) return <p>Erro: {error.message}</p>;

    return (
        <div className="w-screen h-screen flex">
            <Sidebar /> 
            <List />
        </div>
    );
}

export default Home;