let searchAPI = {
    search: async function(text, page){
        if(!page){
            page = 0
        }
        const dataGET = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        }
        const resposta = await fetch('https://images-api.nasa.gov/search?q='+text+'&page='+page+'&page_size=4', dataGET)
        return await resposta.json()
    },
}

export default searchAPI