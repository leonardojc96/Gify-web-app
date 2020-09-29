import React, { useContext, useState, useEffect } from 'react'
import GifsContext  from '../../contex/GifsContex'
import Gif from '../../components/Gif'
import useGlobalGifs from '../../hooks/useGlobalGifs'

export default function Detail({params}){
    // const {gifs} = useContext(GifsContext)
    console.log('detail')
    const gifs = useGlobalGifs()

    
    
    const gif = gifs.find(singleGif =>  
        singleGif.id === params.id
        )
    return(
        <>
        <Gif className='col-12' {...gif} />
        </>
        )
// return(<h3>gifs {params.id}</h3>)
}

