import React from 'react'
import WineryCard from '../components/WineryCard'

const Wineries = ({wineries}) => {

    const displayWineries = wineries.map(winery => {
        return <WineryCard key = {winery.id} winery ={winery} />
    })
   

  return (
    <div>{displayWineries}</div>
  )
}

export default Wineries