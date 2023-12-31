import React from 'react';
import PropTypes from 'prop-types';

export const GifItem = ({title,url}) => {
  return (
    <div className='card'>
        <img src={ url } alt={ title } />
        <p data-testid="ThisTitle">{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string.isRequired
}