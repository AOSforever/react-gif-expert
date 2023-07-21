import { screen, render} from '@testing-library/react'
import { GifItem } from '../src/CMP';

describe('Pruebas en <GifItem/>', () => { 
    const url = 'https://jonhson.com/image.gif';
    const title = 'Imagen de asistencia';
    test('Debe hacer Match con el Snapshot', () => {
        const { container } = render(<GifItem url={ url }/>);
        expect( container ).toMatchSnapshot();
    })    

    test('La imagen debe de cargar correctamente',()=>{
        render(<GifItem url={url} title={ title } />);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })
    
    test('El titulo debe de cargar correctamente', () => {
        render(<GifItem url={url} title={ title } />);
        expect( screen.getByTestId('ThisTitle').innerHTML ).toBe(title)
    })
})
