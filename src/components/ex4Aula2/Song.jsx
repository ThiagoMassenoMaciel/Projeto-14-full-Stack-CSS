import React from 'react'
import BOMJOVI from "../../assets/artists/BOMJOVI.jpeg";


const Song = () => {
  return <>
    <h1>Song + Player</h1>
    <div className='Song'> 
      <div className="Song_container">
        <div className="Song_container_image">
          <img src={BOMJOVI} alt="musica" />
        </div>
      </div>
      <div className="Song_bar">

      </div>

    </div>
  </>
}

export default Song
