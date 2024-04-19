import React from 'react'
import Timer from '../components/Timer'
import SideBar from '../components/SideBar'

function CountdownTimer() {

  return (
    <div className='flex justify-between'>
      <SideBar />
      <div className="p-4 bg-gray-200 w-[73%] flex justify-center" >
        <Timer />
      </div>
    </div>
  )
}

export default CountdownTimer