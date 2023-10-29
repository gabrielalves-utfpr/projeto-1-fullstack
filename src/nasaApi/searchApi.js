let searchAPI = {
    search: async function(text, page){
        if(!page){
            page = 1
        }
        const dataGET = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        }
        try {
            const resposta = await fetch('https://images-api.nasa.gov/search?q='+text+'&page='+page+'&page_size=4', dataGET)
            if (!resposta.ok) {
                throw new Error(`HTTP error! status: ${resposta.status}`);
            }
            return await resposta.json()
        } catch (error) {
            console.error('There was a problem with the fetch operation: ', error);
        }
        /*
        const resposta = await fetch('https://images-api.nasa.gov/search?q='+text+'&page='+page+'&page_size=4', dataGET)
        return await resposta.json()
        */
    },
}

export default searchAPI