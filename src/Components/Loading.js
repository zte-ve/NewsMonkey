import React from 'react'
import loading_img from '../loadingImg.gif'
const loading=()=>{
  return (
    <div className='text-center my-3'>
      <img src={loading_img} alt='loading' />
    </div>
  )
}
export default loading;