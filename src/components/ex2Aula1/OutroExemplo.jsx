import React from 'react'
import Artist from './Artist.jsx';

import axelRose from "../../assets/artists/axelRose.jpg";
import billyEILISH from "../../assets/artists/billyEILISH.png";
import billyIdol from "../../assets/artists/billyIdol.jpg";
import bonJovi from "../../assets/artists/bonJovi.jpg";
import cardB from "../../assets/artists/cardB.jpg";
import dojaCAT from "../../assets/artists/dojaCAT.jpg";
import iggyPOP from "../../assets/artists/iggyPOP.jpg";
import james from "../../assets/artists/james.jpg";
import jasonDERULO from "../../assets/artists/jasonDERULO.jpg";
import kennyWest from "../../assets/artists/kennyWEST.jpg";
import kurtCOBAIN from "../../assets/artists/kurtCOBAIN.jpg";
import maneskin from "../../assets/artists/maneskin.jpg";
import miley from "../../assets/artists/miley.jpg";
import mj from "../../assets/artists/mj.jpg";
import nick from "../../assets/artists/nick.jpg";
import queen from "../../assets/artists/queen.jpg";
import rhcp from "../../assets/artists/rhcp.jpg";
import rihanna from "../../assets/artists/rihanna.jpg";
import shakira from "../../assets/artists/shakira.png";
import slash from "../../assets/artists/slash.png";
import taylor from "../../assets/artists/taylor.jpg";


const artists =[
  {
    img: axelRose,
    name : "Axl rose",
    from : "Guns n' rose"
  }
  ,
  {
    img: billyEILISH,
    name : "Billy Eilish",
    from : "Artista solo"
  }
  ,
  {
    img: billyIdol,
    name: "Billy Idol",
    from : "Artista solo"
  }
  ,
  {
    img: bonJovi,
    name: "Bon Jovi",
    from: "Artista solo"
  }
  ,
  {
    img: cardB,
    name: "Cardi B",
    from: "Artista solo"
  }
  ,
  {
    img: dojaCAT,
    name: "Doja Cat",
    from: "Artista solo"
  }
  ,
  {
    img: iggyPOP,
    name: "Iggy Pop",
    from: "Artista solo"
  }
  ,
  {
    img: james,
    name: "James Hetfield",
    from: "Metallica"
  }
  ,
  {
    img: jasonDERULO,
    name: "Jason Derulo",
    from: "Artist solo"
  }
  ,
  {
    img: kennyWest,
    name: "Kenny West",
    from: "Artista solo"
  }
  ,
  {
    img: kurtCOBAIN,
    name: "Kurt Cobain",
    from: "Nirvana"
  }
  ,
  {
    img: maneskin,
    name: "Maneskin",
    from: "Maneskin"
  }
  ,
  {
    img: miley,
    name: "Miley Cyrus",
    from: "Artista solo"
  }
  ,
  {
    img: mj,
    name: "Michael Jackson",
    from: "Artista solo"
  }
  ,
  {
    img: nick,
    name: "Nick Minaj",
    from: "Artista solo"
  }
  ,
  {
    img: queen,
    name: "Fred mercury",
    from:"Queen"
  }
  ,
  {
    img: rhcp,
    name: "Anthony kids",
    from: "Red Hot Chili Peppers"
  }
  ,
  {
    img: rihanna,
    name: "Rihanna",
    from: "Artista solo"
  }
  ,
  {
    img: shakira,
    name:"Shakira",
    from: "Artista solo"
  }
  ,
  {
    img: slash,
    name: "Slash",
    from: "Guns n' rose"
  }
  ,
  {
    img: taylor,
    name: "Taylor Swift",
    from: "Artista solo"
  }

]


const OutroExemplo = () => {
  return (
    <div className="OutroExemplo">
      <h1>
        Imagems diferentes size dentro de div com size padronizado
      </h1>

      <div className="Artistas">
        {
          artists.map((item, index) => (
            <Artist
              key={index}
              {...item}
            />
          ))
        }
      </div>
    </div>
  )
}

export default OutroExemplo
