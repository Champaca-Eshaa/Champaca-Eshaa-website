import React from 'react';
import Robj from './Robj';
import chakra_br from '../assets/chakra-br.png'
import chakra_prl from '../assets/chakra-prl.png'
import chakra_gr from '../assets/chakra-gr.png'
import Circlesbg from './Circlesbg';

const Background = () => {
  return (
    <div className='fixed bg-black h-screen w-screen -z-10'>
      
      <div className='fixed h-screen w-screen z-10 '
      style={{
        background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent)',
      }}></div>
      {/* <div className='fixed bg-black h-screen w-screen -z-10 bg-opacity-10 backdrop-blur-md'></div> */}
      <Circlesbg />
      <Robj image={chakra_prl} className='bottom-52 -right-32 brightness-75' direction={1} speed={0.01/2} scaleStrength={-10000/1} />
      
      <Robj image={chakra_br} className='-bottom-52 -left-32 opacity-50' direction={-1} speed={0.05/2} scaleStrength={50000/2}/>
      <Robj image={chakra_gr} className='-top-16 -left-52 brightness-75 ' direction={1} speed={0.025/2} scaleStrength={15000/2} />
    </div>
  )
}

export default Background
