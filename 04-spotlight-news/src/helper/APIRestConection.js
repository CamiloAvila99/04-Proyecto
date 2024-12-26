export const APIRestConnection = async(language,category,pageSize,component,arrayNameLocal) =>{
    const API_KEY = 'Iats4VnMllCojgRYj1elF1R6vHGaNpSaKDqd2zWMkBpcWRlx';

    try{
        const response = await fetch(`https://api.currentsapi.services/v1/latest-news?apiKey=${API_KEY}&language=${language}&category=${category}&page_number=1&page_size=${pageSize}`);
        
        if(!response.ok){
            console.error(`Error HTTP: ${response.status} en el componente ${component}`)
            return [];
        }
        
        const data = await response.json();

        if(data.news && Array.isArray(data.news)){
            localStorage.setItem(`${arrayNameLocal}`, JSON.stringify(data.news));
            return data.news;
        }
        else{
            console.warn(`No se encontraron noticias válidas en el componente ${component}`)
            return [];
        }
    }catch(error){
        console.log(`Error de conexion del servidor en el componente: ${component}`, error);
        return [];
    }
}