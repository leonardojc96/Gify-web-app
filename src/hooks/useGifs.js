import { useState, useEffect, useContext } from "react";
import GetGifs from "../Services/GetGifs";
import  GifsContext  from "../contex/GifsContex";

export function useGifs({keyword} = {keyword: null}){
    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)

    // console.log(gifs)
    useEffect(function () {
      setLoading(true)
      const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
      
      GetGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs)
        setLoading(false)
        // guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
  }, [keyword, setGifs])
      console.log(gifs)
      
      return {loading, gifs}
      // setGifs(localStorage.getItem('gifs'))
}