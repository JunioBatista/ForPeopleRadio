import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import List from "../../components/FavoriteList/FavoriteListRoot";
import Sidebar from "../../components/Sidebar/SidebarRoot";
import RadioService from '../../services/radio-service'; 
import { FavoritesProvider, useFavorites } from '../../contexts/favoriteContext';

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
        <FavoritesProvider>
            <div className="w-screen h-screen flex">
                <Sidebar /> 
                <List />
            </div>
        </FavoritesProvider>
    );
}

export default Home;