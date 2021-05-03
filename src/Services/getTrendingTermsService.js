
import {api_key, api_url} from './setting'

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  
  return data
}


export default function getTrendingTermsService({limit = 25, keyword = 'panda'} = {}){
    const ApiUrl = `${api_url}/trending/searches?api_key=${api_key}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`;


    return fetch(ApiUrl)
    .then((res) => res.json())
    .then(fromApiResponseToGifs)
}

