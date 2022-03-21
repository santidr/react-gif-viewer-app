export const getGifs = async (category) => {
    
    const api_url = `https://api.giphy.com/v1/gifs/search?api_key=FEaCmZCaMFVPadfZfCZJGXI1LG77TjQj&q=${ encodeURI(category) }&limit=10`
    const resp = await fetch(api_url)
    const { data } = await resp.json()

    const gifs = data.map(img => (
        {
            id: img.id,
            title: img.title,
            url: img.images?.original.url,
        }
    ))
    
    return gifs
}