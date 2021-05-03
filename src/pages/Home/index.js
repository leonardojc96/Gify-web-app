import React, { useState, useEffect, useCallback } from 'react'
import {Link, useLocation} from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'
import TrendingSearches from '../../components/TrendingSearches'
import '../../components/ListOfGif.css'
import SeachForm from '../../components/SearchForm'

export default function Home(){
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    // usecallback, pra guardar la funcion y no la cree de nuevo
    // al menos que cambien las dependencias
    const handleSubmit = useCallback (({keyword}) => {
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])
    

    return (<>
    {loading ? <h1>loading...🔅</h1>:<>
    
        <SeachForm onSubmit={handleSubmit}/>

        <div className='row listOfGifs p-3 m-xl-5 m-md-3 m-2'>
            <h3 className='col-12'>Last searched: {decodeURI(localStorage.getItem('lastKeyword'))}</h3>
            <div className='col-lg-9 col-12'>
                <div className='row d-flex justify-content-center '>
                    <ListOfGifs className='' gifs={gifs}/>
                </div>
            </div>
            <div className='Tendencias col-lg-2 col-12'>
                <TrendingSearches />
            </div>
        </div>
    </>}
        
    </>)
}