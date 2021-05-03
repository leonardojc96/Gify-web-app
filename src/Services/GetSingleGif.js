import {api_key, api_url} from './setting'

const fromApiResponseToGifs = apiResponse => {
    const {data } = apiResponse
    const {images, title, id} = data
    const { url } = images.downsized_medium
    return { title, id, url }
}


export default getSingleGif ({id})
{
    return fetch(`${api_url}/gifs/${id}?api_key=${api_key}`)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}