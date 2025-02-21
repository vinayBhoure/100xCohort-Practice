import React from 'react'
import { atom, useRecoilValue } from 'recoil'
import { showMenu } from '../atoms/atoms';

function Main() {
  const isMenu = useRecoilValue(showMenu);
  return (
    <div className={`${isMenu ? 'col-span-8' : 'col-span-10'} bg-neutral-900 text-white`}>
      Main video section
    </div>
  )
}

export default Main
