import React from 'react'

const GifGridItem = ({title, url}) => {
  return (
    <div className='card animate__animated animate__fadeIn'>
      <img src={url} alt={title} />
      <div className='card-text'>
        <p>{title}</p>
      </div>
    </div>
  )
}

export default GifGridItem
