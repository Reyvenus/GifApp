
export const getInfo = async (category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=JH1rjFFnCCWGDHuhnvdxWJMbkhFTP8o7&q=${encodeURI(category)}&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json()
    
    // const info = await axios(url)
    // const {data} = info.data

    const gifs = data.map(e => {
        return {
            id: e.id,
            title: e.title,
            img: e.images.downsized_medium.url
        }
    })
    return gifs
}