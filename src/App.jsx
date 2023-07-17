import { useState } from 'react';
import { GifInput, GifGrid } from './components/';

export const App = () => {

    const [categories, setCategories] = useState(['Demon slayer'])

    const onNewValue = (value) => {
        if (categories.includes(value)) return;
        setCategories([value, ...categories])
    }

    return (
        <>
            <GifInput onNewValue={(value) => onNewValue(value)} />
            {
                categories.map((category) => (<GifGrid key={category} category={category} />))
            }
        </>
    )
}

export default App;