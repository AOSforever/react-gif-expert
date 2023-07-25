import { useState, useEffect } from "react";
import { getGifs } from "../JS/getGifs";

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    
    const giveImage = () => { 
        getGifs( category ).then( newImages => {
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
