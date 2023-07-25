import { useState } from 'react';
import { GifGrid , AddCategory } from './CMP'
export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onNewCategory = ( categoryValue ) => {
        if(categories.includes(categoryValue)) return;
        setCategories( category => [ categoryValue, ...category ] )
    }
    
    return (
        <> // SE TIENE QUE RENDERIZAR 
            // Title
            <h1>GifExpertApp</h1>

            // Input
            <AddCategory onNewCategory = { onNewCategory }/> // TESTEADO

            // Gifs
            {
                categories.map(
                    category => (
                        <GifGrid key={category} category={category}/> // TESTEADO
                    )
                )
            }        
        </>
    )
}



// api.giphy.com/v1/gifs/search?api_key=6fa0CYEvIeX1JrwhHnomwKeRodiqEKoe&q=valorant
