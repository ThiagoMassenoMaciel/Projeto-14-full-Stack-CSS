import React from 'react'
import BOMJOVI from "../../assets/artists/BOMJOVI.jpeg";
import bomjovi from "../../assets/artists/bonJovi.jpg";
import Player from "./Player.jsx";


const Song2 = () => {
  return <>
    <h1>Song + Player -other way</h1>
    <div className='Song2'> 
      <div className="Song2_container">
        <div className="Song2_container_image">
          <img src={BOMJOVI} alt="musica" />
        </div>
      </div>
      <div className="Song2_bar">
        <div className="Song2_bar_artistIMAGE">
          <img src={bomjovi} alt="artist photo" />
        </div>
      
        <Player /* className="Song2_player" */ />
        <p className='Song2_songINFO'>
          This ain't love Song
        </p>
      </div>
      
    </div>
    <h1 className='Song2-h1'>Mudando o size font de acordo viewport width  vw</h1>
  </>
}

export default Song2
