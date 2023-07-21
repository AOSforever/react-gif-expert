// FILE -> getGifs.test.js
import { getGifs } from "../src/JS/getGifs"

describe('Pruebas en archivo getGifs.js', () => {
    test('Debe de retornar un arreglo de gifs', async () => {
        const resp = await getGifs("Goku")
        expect(resp.length).toBeGreaterThanOrEqual( 1 );
        // expect(resp.length).toBeGreaterThan( 0 );
        expect( resp[0] ).toStrictEqual(
            {
                id: expect.any( String ),
                title: expect.any( String ),
                url: resp[0].url.startsWith('https://') && expect.any( String )
            }
        )
    })
})