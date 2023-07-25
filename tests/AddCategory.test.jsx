import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../src/CMP"

describe('Pruebas en <AddCategory/>', () => {
    const value = " Jonhsin ";                 // ( -> Rol de un CAMPO DE ENTRADA -> 'textbox')
    test('Debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={ ()=>{/**/} }/>);
        const inp = screen.getByRole('textbox'); // Selecciona un input 
        
        fireEvent.change( inp , { target: { value } } ) // Evento 'Change'

        expect( inp.value ).toBe( value ); 
        
    })
    
    test('Debe de funcionar el llamado a onNewCategory', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);

        const from = screen.getByRole('form');
        const inp = screen.getByRole('textbox'); // Selecciona un input 
        
        fireEvent.change( inp , { target: { value } } ); // Evento 'Change'
        fireEvent.submit( from );
        
        expect( inp.value ).toBe('');
        
        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( value.trim() );
        
        // screen.debug();
    })
    
    test('No debe de llamar el onNewCategory si el input está vacio',()=>{
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory }/>);
        
        const from = screen.getByRole('form');
        
        fireEvent.submit( from );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    })
})  