import React, { useState } from 'react'
import Header from './component/Header'
import Aside from './component/Aside'
import Main from './component/Main'
import { useRecoilState, useRecoilValue } from 'recoil'
import { showMenu } from './atoms/atoms'

export default function YoutubeApp() {

  const menu = useRecoilValue(showMenu);

  return (
    <div className='h-screen w-screen bg-white'>
      <Header />
       <div className='grid grid-cols-10 relative'>
        {menu ? <Aside /> : null}
        <Main />
       </div>
    </div>
  )
}
