import { render, screen } from "@testing-library/react";
import { GifGrid } from "../src/CMP";
import { useFetchGifs } from "../src/HOOKS/useFetchGifs";

jest.mock('../src/HOOKS/useFetchGifs')// Regresa un undefined

describe('Pruebas en <GifGrid/>',()=>{
    const category = 'Querida esposa';
    test('Debe de mostrar el loading inicialmente',()=>{
        useFetchGifs.mockReturnValue({ // Probando el estado del componente
            images: [],
            loading: true
        })

        render(<GifGrid category={ category }/>);
        
        screen.getByTestId('loading');
        
        expect( screen.getByText( category ) );
        
        // screen.debug();
    })
    
    test('Debe de mostar items cuando se cargan las imagenes useFetcGifs',()=>{
        
        const gifs = [
            {
                id: 'DS3124JK3',
                url: 'https://localhost/batman',
                title: 'batman'
            },
            {
                id: 'DS3124JK3',
                url: 'https://localhost/batman',
                title: 'batman'
            }
        ]
        
        useFetchGifs.mockReturnValue({ // Probando el estado del componente
            images: gifs,
            loading: false
        })
        
        render(<GifGrid category={ category }/>);
        
        expect( screen.getAllByRole('img').length ).toEqual(2);
        expect( screen.getAllByRole('img')[0].src.startsWith('https://') ).toBe(true)
        
        // screen.debug();
    })
})