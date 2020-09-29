import React from 'react';
import './Gif.css'
import {Link} from 'wouter'

export default function Gif({title, url, id}){
    return (
    <Link to={`gif/${id}`} className="Gif col-xl-3 col-md-4 col-11">
        <h4>{title}</h4>
        <img loading='lazy' src={url} alt ={title}/>
    </Link>
    )
}