import React from 'react';
import './Gif.css'
import {Link} from 'wouter'

function Gif({title, url, id, tamaño = {tamaño:'s'}} ){
    return (
            tamaño === 's' 
            ?
            <Link to={`gif/${id}`}  className="Gif aling-content-center col-xl-3 col-lg-4 col-md-6 col-10">
            <h4 className='text-white'>{title}</h4>
            <img loading='lazy' src={url} alt ={title}/>
            </Link>
            :
            <Link to={`gif/${id}`}  className="Gif aling-content-center col-xl-8 col-lg-8 col-12">
            <h4 className='text-white'>{title}</h4>
            <img loading='lazy' src={url} alt ={title}/>
            </Link>
        
            )
}

export default React.memo(Gif)