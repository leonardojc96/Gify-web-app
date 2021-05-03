import React, {useEffect, useState} from 'react';
import Gif from './Gif';
import './ListOfGif.css'


export default function ListOfGifs({gifs}){
    return <>
      <div className='listOfGifs row d-flex justify-content-center'>
    {

      gifs.map(({id, title, url}) =>
        <Gif
          id={id}
          key={id}
          title={title}
          url={url}
          tamaño='s'
          />
      )
    }
    </div>
    </>
}