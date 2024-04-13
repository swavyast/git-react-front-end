import React from 'react'

function NewHome({dropdownStatus}) {
  return (
    <div className='fixed-top mt-5 mb-5 newhome'>
        {dropdownStatus ? (null) : (<h1 className="text-center mt-3 fs-4">Welcome to GitManager...</h1>)}
        <h1 className="text-center">hey Himanshu</h1>
        <h1 className="text-center">hey Himanshu</h1>
        <h1 className="text-center">hey Himanshu</h1>
        <h1 className="text-center">hey Himanshu</h1>
        <h1 className="text-center">hey Himanshu</h1>
        <h1 className="text-center">hey Himanshu</h1>
        <h1 className="text-center">hey Himanshu</h1>
    </div>
  )
}

export default NewHome