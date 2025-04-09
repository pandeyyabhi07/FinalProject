import React from 'react'
import { Outlet } from 'react-router-dom'

const MemberLayout = () => {
  return (
    <div className='grid grid-cols-12 gap-x-4'>
        <div className="col-span-3">
            SideBAR
        </div>
        <div className="col-span-9">
            <Outlet/>
        </div>

    </div>
  )
}

export default MemberLayout