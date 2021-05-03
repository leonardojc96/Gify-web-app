import {api_key, api_url} from './setting'

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


export default function GetGifs({limit = 9, keyword = 'panda', page = 0} = {}){
    let ApiUrl = `${api_url}/gifs/search?api_key=${api_key}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`;


    return fetch(ApiUrl)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}

