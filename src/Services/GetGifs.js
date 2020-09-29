
const api_key = 'b8HqH3LETnmk5LVUOgWo0Ck4W8Wq5V0S';

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const {images, title, id} = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}


export default function GetGifs({limit = 25, keyword = 'panda'} = {}){
    const ApiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`;


    return fetch(ApiUrl)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}

