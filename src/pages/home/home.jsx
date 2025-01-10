import { useQuery } from "@tanstack/react-query";
import List from "../../components/FavoriteList/FavoriteListRoot";
import Sidebar from "../../components/Sidebar/SidebarRoot";
import RadioService from '../../services/radio-service'; 
import { FavoritesProvider } from '../../contexts/favoriteContext';
import { useState } from "react";

const fetchRadios = async () => {
    return await RadioService.getRadios(10);
};

function Home() {

    const [currentSection, setCurrentSection] = useState("sidebar");
    
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['radios'],
        queryFn: fetchRadios,
    });


    if (isLoading) return (
    <div className="bg-primary-900 w-screen h-screen flex items center justify-center">
        <p>Carregando...</p>;
    </div>

    )

    if (isError) return <p>Erro: {error.message}</p>;

    const handleChangeSection = (section) => {
        setCurrentSection(section)
    }
      
    return (
        <FavoritesProvider>

                <div className="flex w-full">
                    <div className={`${ currentSection === "sidebar" ? "flex" : "hidden" } w-full sm:flex lg:w-1/3`}>              
                        <Sidebar changeSection={handleChangeSection} /> 
                    </div>

                    <div className={`${ currentSection === "favorit" ? "flex" : "hidden" } w-full h-screen sm:flex `}>
                        <List changeSection={handleChangeSection} /> 
                    </div>
                </div>

        </FavoritesProvider>
    );
}

export default Home;