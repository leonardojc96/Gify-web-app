import React, { useState, useEffect } from 'react'
import {Link, useLocation} from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from '../../hooks/useGifs'

export default function Home(){
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt =>{
        setKeyword(evt.target.value)
    }

    return (<>
    {loading ? <h1>loading</h1>:<>
    
        <form onSubmit={handleSubmit} className='form-group col-12 d-flex aling-item-center justify-content-center'>
        <input className='form-control p-4 col-4 ' placeholder='search a gift here...' onChange={handleChange} type='text' value={keyword} />
        <button className='btn btn-info'>Buscar</button>
        </form>
        <h3 className='col-12'>Last searched: {localStorage.getItem('lastKeyword')}</h3>
        <ListOfGifs className='col-4 d-flex justify-content-center' gifs={gifs}/>
    </>}
        
    </>)
}