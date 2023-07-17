import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/index'

describe('Test de componente <GifItem/>', () => {

    const [title, url] = ['Este es un titulo', 'httpsu://raicerk.cl/'];
    
    test('Se debe dibujar el componente y ser valido con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    })

    test('Se debe comprobar que las propiedades de titulo y url se estén dibujando nuevamente', () => {
        render(<GifItem title={title} url={url}/>);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Se debe mostrar el titulo', () => {
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
    })
})