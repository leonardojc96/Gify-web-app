import React, { useContext } from 'react'
import  GifsContext  from "../contex/GifsContex";

export default function useGlobalGifs(){
    const {gifs} = useContext(GifsContext)
    return gifs
}