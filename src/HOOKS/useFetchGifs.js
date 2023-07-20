import { useState, useEffect } from "react";
import { getGifs } from "../JS/getGifs";

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    
    const giveImage = () => { // CAMBIA LOS ESTADOS
// GetGifs -> Una función que retorna una promesa y resuelve una API
        getGifs( category ).then( newImages => {
// REACT re-renderiza una sola vez 
            setImages( newImages );
            setLoading( false )
        })
    }

    useEffect(() => {
        giveImage()
    },[])

    return {
        images,
        loading
    }
}
