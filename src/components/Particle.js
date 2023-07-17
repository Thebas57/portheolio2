import React from 'react'
import Particles from 'react-particles'
import configDark from '../particles/particlesjs-config.json';
import configLight from '../particles/particlesjs-config-light.json';

const Particle = () => {
  return (
    <div className='particle-container'>
        <Particles params={configLight} />
    </div>
  )
}

export default Particle