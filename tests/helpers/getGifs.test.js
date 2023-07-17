import { getGifs } from '../../src/helpers/getGifs' 

describe('Test de getGifs', () => {
    
    test('Test de función getGifs', async () => {
        const data = await getGifs('Naruto');
        expect(data.length).toBeGreaterThan(0);
    });

    test('Debe venir las propiedades indicadas en la respuesta', async () => {
        const data = await getGifs('Naruto');
        expect(data[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
    
})