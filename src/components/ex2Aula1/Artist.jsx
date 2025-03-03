import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'

const Artist = ({img, name, from}) => {
  return (
    <div className='Artistas_Artista'>

      <div className="Artistas_Artista_divIMAGE">
        <img src={img} alt={`${name}`} />
      </div>
      <h3>{name}</h3>
      <h4>{from}</h4>
      <FontAwesomeIcon className='Artistas_Artista_Icon' icon={faCirclePlay} />
    </div>
  )
}

export default Artist
