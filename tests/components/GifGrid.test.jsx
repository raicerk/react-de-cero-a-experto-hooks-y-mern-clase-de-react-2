import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs')

describe('Test de <GifGrid/>', () => {

    const category = 'Naruto';
    
    test('Debe retornar el texto del titulo', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })
        
        render(<GifGrid category={ category }/>)
        
        expect(screen.getByText('Naruto')).toBeTruthy();
        expect(screen.getByText('Loading...')).toBeTruthy();
        expect(screen.getByText('Naruto')).toMatchSnapshot();
    });

    
    
    test('Debe mostrar los elementos de la lista', () => {
        useFetchGifs.mockReturnValue({
            images: [
                {
                    id: '123',
                    title: 'Narutito',
                    url: 'https://raicerk.cl/naruto'
                }
            ],
            isLoading: false,
        })
        render(<GifGrid category={ category }/>)
        expect(screen.getAllByRole('img').length).toBe(1);
    })
    
})