import { useState, useEffect, useContext } from "react";
import GetGifs from "../Services/GetGifs";
import  GifsContext  from "../contex/GifsContex";

const INITIAL_PAGE = 0;

export function useGifs({keyword} = {keyword: null}){
    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const [page, setPage] = useState(INITIAL_PAGE);
    const {gifs, setGifs} = useContext(GifsContext);
    
    // recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'
    
    useEffect(function () {
      setLoading(true);
      
      GetGifs({ keyword: keywordToUse })
      .then(gifs => {
        setGifs(gifs);
        setLoading(false);
        // guardamos la keyword en el localStorage
        localStorage.setItem('lastKeyword', keyword);
      })
  }, [keyword, keywordToUse, setGifs]);

    useEffect(() => {
      if (page === INITIAL_PAGE) return;
      
      setLoadingNextPage(true)

      GetGifs({keyword: keywordToUse, page})
        .then(nextGifs => {
          setGifs(prevGifs => prevGifs.concat(nextGifs))
          setLoadingNextPage(false)
        })
    }, [page, keywordToUse]);
      
      return {loading, loadingNextPage, gifs, setPage};
      // setGifs(localStorage.getItem('gifs'))
}