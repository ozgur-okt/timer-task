import React from 'react'
import Timer from '../components/Timer'
import SideBar from '../components/SideBar'

function CountdownTimer() {
  return (
    <div className='flex h-[100vh]'>
      <SideBar />
      <Timer />
    </div>
  )
}

export default CountdownTimer