import React, {useEffect, useState} from 'react';
import Gif from './Gif';
import GetGifs from '../Services/GetGifs';



export default function ListOfGifs({gifs}){
    return <>
    {
      gifs.map(({id, title, url}) =>
        <Gif
          id={id}
          key={id}
          title={title}
          url={url}
        />
      )
    }
    </>
}