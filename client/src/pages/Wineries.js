import React from 'react'
import WineryCard from '../components/WineryCard'
import { CardContainer } from '../styles'

const Wineries = ({wineries, onChangeRating, onAddRating}) => {

    const displayWineries = wineries.map(winery => {
         return <WineryCard key={winery.id} winery={winery} onChangeRating={onChangeRating} onAddRating={onAddRating}/>
    })

  return (
    <CardContainer>{displayWineries}</CardContainer>
  )
}

export default Wineries