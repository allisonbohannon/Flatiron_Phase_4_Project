import React from 'react'
import WineryCard from '../components/WineryCard'

const Wineries = ({wineries, currentUser, onChangeRating, onAddRating}) => {

    const displayWineries = wineries.map(winery => {
         return <WineryCard key={winery.id} winery={winery} currentUser={currentUser} onChangeRating={onChangeRating} onAddRating={onAddRating}/>
    })

  return (
    <div>{displayWineries}</div>
  )
}

export default Wineries