
import PropTypes from 'prop-types';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);
    return (
        <>
            <h3>{category}</h3>
            {isLoading && (<h2>Loading...</h2>)}
            {
                images.map((image) => (<GifItem key={image.id} {...image} />))
            }
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}