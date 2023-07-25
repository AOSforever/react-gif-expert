import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../src/HOOKS/useFetchGifs";

describe('Pruebas en hook useFetchGifs.js (File)',()=>{
    const log = console.log;
    test('Probando que los hooks se inicialicen',()=>{
        const { result } = renderHook( () => useFetchGifs( 'Batman' )  );
        const { images , loading } = result.current;
        
        expect( images.length ).toStrictEqual(0);
        expect( loading ).toBeTruthy();
    })

     test('Probando que el arreglo devuelva imagenes y el loading cambie a false',async ()=>{
        const { result } = renderHook( () => useFetchGifs( 'batman' ));

        await waitFor(
            () => {
                expect( result.current.images.length ).toBeGreaterThan(0)
            } 
        );

        expect( result.current.images.length ).toBeGreaterThan(0);
        expect( result.current.loading ).toBeFalsy();
    })
})