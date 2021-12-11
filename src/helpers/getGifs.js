export const getGifs = async (category) => {
    
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=j99rgo0dUh8COkuOD3HLkXIhDrkuGzdg`
  const response = await fetch(url)
  const {data} = await response.json()

  const gifs = data.map(item => {
    return {
      url: item.images?.downsized_medium.url,
      id: item.id,
      title: item.title
    }
  })
  return gifs
}