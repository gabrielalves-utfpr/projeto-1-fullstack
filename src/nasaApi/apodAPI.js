let apodAPI = {
    get: async function(){
        
        const dataGET = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        }
        const resposta = await fetch('https://api.nasa.gov/planetary/apod?api_key='+process.env.REACT_APP_NASA_API_KEY, dataGET)
        return await resposta.json()
    },
}

export default apodAPI