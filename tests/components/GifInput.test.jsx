import { render, fireEvent, screen } from '@testing-library/react';
import { GifInput } from '../../src/components/';

describe('Test de <GifItem/>', () => {
    test('test de property de componente', () => {
        render(<GifInput onNewValue={() => { }} />);
    })

    test('Se debe cambiar el valor del input', () => {
        render(<GifInput onNewValue={() => { }} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { value: 'Naruto' } });
        expect(input.value).toBe('Naruto');
    })

    test('Se debe cambiar el valor del input', () => {

        const value = 'Naruto'
        const onNewValue = jest.fn();
        
        render(<GifInput onNewValue={onNewValue} />);
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input, { target: { value: value } });
        fireEvent.submit(form);
        
        expect(input.value).toBe('');
        expect(onNewValue).toHaveBeenCalled();
        expect(onNewValue).toHaveBeenCalledTimes(1);
        expect(onNewValue).toHaveBeenCalledWith(value);
    })


    test('No se debe cambiar el valor del input ni se debe llamar a la funcion', () => {
        const onNewValue = jest.fn();
        render(<GifInput onNewValue={ onNewValue } />);
        
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        
        expect(onNewValue).not.toHaveBeenCalled();
        expect(onNewValue).toHaveBeenCalledTimes(0);
    })
})