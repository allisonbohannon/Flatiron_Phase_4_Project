import React from 'react'
import { useParams } from 'react-router-dom'


const WineryDetail = () => {

  const params = useParams()
  console.log(params)
  
  return (
    <div>WineryDetail</div>
  )
}

export default WineryDetail