import { useState,useEffect } from 'react';
// import { useEffect } from "react";
import { getGifs } from "../JS/getGifs";
import { GifItem } from './GifItem';
import { useFetchGifs } from '../HOOKS/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, loading } = useFetchGifs( category );
  
  return (
    <>
        {
          loading && <h2>Cargando...</h2>
        }

        <h3>{ category }</h3>
        <div className='card-grid'>
          {
            images.map( image => (
              <GifItem { ...image } key={image.id}/>
            ))
          }
        </div>
    </>
  )
}
