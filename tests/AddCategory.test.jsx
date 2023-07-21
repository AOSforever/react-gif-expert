import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../src/CMP"

describe('Pruebas en <AddCategory/>', () => {
    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={ ()=>{/**/} }/>);
        const inp = screen.getByRole('textbox'); // Selecciona un input 
        const value = "Jonhsin";                 // ( -> Rol de un CAMPO DE ENTRADA -> 'textbox')

        fireEvent.change( inp , { target: { value } } ) // Evento 'Change'
        expect( inp.value ).toBe( value ); 

        screen.debug();
    })

    test('should first', () => { second })
})  