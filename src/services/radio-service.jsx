import axios from 'axios';

const API_BASE_URL = 'https://de1.api.radio-browser.info'; 

const RadioService = {
    getRadios: async (limit) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/json/stations/search?limit=${limit}`);  
            return response;
        } catch (error) {
            console.error('Erro ao buscar as rádios:', error);
            throw error;
        }
    },
};

export default RadioService;