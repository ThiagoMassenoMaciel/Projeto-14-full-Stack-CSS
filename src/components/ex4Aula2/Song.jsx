import React from 'react'
import BOMJOVI from "../../assets/artists/BOMJOVI.jpeg";
import bomjovi from "../../assets/artists/bonJovi.jpg";
import Player from "./Player.jsx";


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
        <div className="Song_bar_artistIMAGE">
          <img src={bomjovi} alt="artist photo" />
        </div>
      
        <Player className="Song_player"/>
        <p className='Song_songINFO'>
          This ain't love Song
        </p>
      </div>

    </div>
  </>
}

export default Song
