import { useState } from 'react';
import { GifGrid , AddCategory } from './CMP'
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Happy']);
    const onNewCategory = ( categoryValue ) => {
        if(categories.includes(categoryValue)) return;
        setCategories( category => [ categoryValue, ...category ] )
    }
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory onNewCategory = { onNewCategory }/>

            {
                categories.map(
                    category => (
                        <GifGrid key={category} category={category}/>
                    )
                )
            }        
        </>
    )
}
// api.giphy.com/v1/gifs/search?api_key=6fa0CYEvIeX1JrwhHnomwKeRodiqEKoe&q=valorant
