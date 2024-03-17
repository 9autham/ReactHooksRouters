import React,{memo}from 'react'

const UseMemoComp = ({memovar}) => {
    console.log("UseMemoComp is called");
  return (
    <h2 className='text-dark App mb-3'>UseMemoComp - {memovar}</h2>
  )
}

export default memo(UseMemoComp);