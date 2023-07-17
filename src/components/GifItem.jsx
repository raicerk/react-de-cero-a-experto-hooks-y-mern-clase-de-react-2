import PropTypes from 'prop-types'

export const GifItem = ({url, title}) => {
    return (
        <div>
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}


GifItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}