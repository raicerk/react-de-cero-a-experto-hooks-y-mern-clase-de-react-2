export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=uW1K7O9J8oskBxPC0joexwia73bI2mpX&q=${category}&limit=4`
    const call = await fetch(url)
    const { data } = await call.json();
    const resp = data.map(image => ({
        id: image.id,
        title: image.title,
        url: image.images.downsized_medium.url
    }))
    return resp;
}