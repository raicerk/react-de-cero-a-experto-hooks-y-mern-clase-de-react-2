import { useState } from 'react';
import { PropTypes } from 'prop-types';

export const GifInput = ({ onNewValue }) => {
    const InitialValue = ''
    const [input, setInput] = useState(InitialValue);

    const handlerChange = ({ target: { value } }) => {
        setInput(value)
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        if (input.trim().length <= 1) return;
        onNewValue(input.trim());
        setInput(InitialValue);
    }

    return (
        <form onSubmit={handlerSubmit} aria-label="form">
            <input
                type="text"
                value={input}
                onChange={handlerChange}
                placeholder="Busca tu gif acá y presiona enter"
            />
        </form>
    )
}

GifInput.propTypes = {
    onNewValue: PropTypes.func.isRequired,
}