import ListOfGifs from "../../components/ListOfGifs";
import React from "react";
import { useGifs } from "../../hooks/useGifs";


 export default function SearchResult({params}){
    const {keyword} = params; 
    const {loading, gifs} = useGifs({keyword})
    console.log(gifs)
  return <>
  {loading?<h1>loading</h1>:
  
    <ListOfGifs className='col-4 d-flex justify-content-center' gifs={gifs}/>
  }
  </>
}
