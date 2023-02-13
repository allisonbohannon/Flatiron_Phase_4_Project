import React from 'react'
import WineryCard from '../components/WineryCard'

const Wineries = ({wineries, currentUser}) => {

    const displayWineries = wineries.map(winery => {
        return <WineryCard key = {winery.id} winery ={winery} currentUser={currentUser} />
    })
   

  return (
    <div>{displayWineries}</div>
  )
}

export default Wineries