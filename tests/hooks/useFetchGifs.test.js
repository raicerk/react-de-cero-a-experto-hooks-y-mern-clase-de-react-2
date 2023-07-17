import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Test de useFetchGifs custom hook', () => {
    
    test('debe devolver el estado inicial del hook', () => {
        const { result } = renderHook(() => useFetchGifs('Naruto') );
        
        const { images, isLoading } = result.current;
        
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })

    test('Debe retornar un listado de imagenes y el isLoading en falso', async ()=> {
        const { result } = renderHook(() => useFetchGifs('Naruto') );
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        
        const { images, isLoading } = result.current;
        
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
})