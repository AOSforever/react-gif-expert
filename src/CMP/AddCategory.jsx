import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {
    const [inputValue, setInputValue] = useState('Search Gifs');
    const onChangeValue = ({target}) => setInputValue(target.value);
    const onSubmit = event => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory( inputValue.trim() );
        setInputValue('');
    };
  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Buscar Gifs"
            value={inputValue}
            onChange={ onChangeValue }
        />
    </form>
  )
}
