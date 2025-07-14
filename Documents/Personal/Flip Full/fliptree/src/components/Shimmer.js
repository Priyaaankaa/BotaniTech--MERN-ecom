import React from 'react'

const Shimmer = () => {
  return (
    <div>
      <div className='flex flex-wrap mx-16 justify-center'>
      {Array(10).fill("").map((e, index)=>
            (<div key={index} className="h-72 w-48 m-7 z-10 rounded-md bg-slate-200">
        </div>))}
    </div>
    </div>
  )
}

export default Shimmer
