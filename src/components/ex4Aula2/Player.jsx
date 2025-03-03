import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackwardStep ,faCirclePlay, faForwardStep } from '@fortawesome/free-solid-svg-icons'

const Player = () => {
  return (
    <div className='Player'>
      <div className="Player_controlers">
        <FontAwesomeIcon className='Player_controlers_back' icon={faBackwardStep} />
        <FontAwesomeIcon className='Player_controlers_play' icon={faCirclePlay} />
        <FontAwesomeIcon className='Player_controlers_for' icon={faForwardStep} />
      </div>

      
    </div>
  )
}

export default Player
