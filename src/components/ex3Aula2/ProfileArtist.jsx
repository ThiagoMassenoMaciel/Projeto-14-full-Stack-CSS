import React from 'react'

const array = [
  {
    name: "This ain't a love song",
    image: "https://th.bing.com/th?id=OVP.Je84wYmf6bwhL7hIN8jGqAHgFo&w=424&h=238&c=7&rs=1&qlt=90&o=6&pid=1.7"
  }
  ,
  {
    name: "Always",
    image: "https://th.bing.com/th?id=OVP.r94yqV6K56XK_AN-0lPZxwHgFo&w=187&h=105&c=7&rs=1&qlt=90&o=6&pid=1.7"
  }
  ,
  {
    name: "Blaze of glory",
    image:"https://th.bing.com/th?id=OVP.drcxpimQsBickbhFone2pQHgFo&w=187&h=105&c=7&rs=1&qlt=90&o=6&pid=1.7"
  }

]

const ProfileArtist = () => {
  return <>
      <h1>
        Usando background-image 
      </h1>
    <div className='ProfileArtist'>
      <div className="ProfileArtist_header">
        <h2 className='ProfileArtist_header_title'>Bon Jovi</h2>
      </div>
      <div className="ProfileArtist_body">
        {
          array.map((item,index)=>(
            <section key={index}>
              <div className="ProfileArtist_body_songname">
              <p>{index+1}</p>
              <p className='ProfileArtist_body_songname_p'>{item.name}</p>
              </div>
              <div className="ProfileArtist_body_img">
                <img src={item.image} alt={item.name} />
              </div>

            </section>
          ))
        }
      </div>
      
    </div>
  </>
}

export default ProfileArtist
