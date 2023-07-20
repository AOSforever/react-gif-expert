import React from 'react'

export const GifItem = ({title,url}) => {
  return (
    <div className='card'>
        <img src={`${url}/giphy.gif`} alt={title} />
    </div>
  )
}
