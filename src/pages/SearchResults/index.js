import ListOfGifs from "../../components/ListOfGifs";
import React, { useCallback, useRef, useEffect } from "react";
import { useGifs } from "../../hooks/useGifs";
import useNearScreen from "../../hooks/useNearScreen";
import debounce from 'just-debounce-it'


 export default function SearchResult({params}){
    const {keyword} = params; 
    const {loading, gifs, setPage} = useGifs({keyword})
    const externalRef = useRef();
    const {isNearScreen} = useNearScreen({
      externalRef: loading? null: externalRef,
      once: false
    });

    const debounceHandleNextPage = useCallback(debounce(
      () => setPage(prev => prev + 1),
      500   
      ),[setPage])


    useEffect (function () {
      console.log(isNearScreen)
      if (isNearScreen) {
        debounceHandleNextPage()
      }
    }, [debounceHandleNextPage, isNearScreen])

  return <>
  {loading?<h1>loading</h1>:
    <>
    <h3 className='col-12 m-4'>{decodeURI(keyword)}</h3>
    <ListOfGifs className='col-4 d-flex justify-content-center' gifs={gifs}/>
    
    <div id='visor' ref={externalRef}>

    </div>
    </>
  }
  </>
}
