import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp/>',()=>{
    test('Debe de cargar todos los elementos',()=>{
        render(<GifExpertApp/>);

        expect( screen.getByRole('heading',{ level: 1 }) ).toBeTruthy()
        expect( screen.getByRole('textbox') ).toBeTruthy();
        // expect( screen.getAllByRole('heading',{ level: 3 }) ).toBeGreaterThanOrEqual(0);
        // screen.debug();
    })

    
})