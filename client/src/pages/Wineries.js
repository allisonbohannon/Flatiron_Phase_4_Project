import React from 'react'
import WineryCard from '../components/WineryCard'
import { CardContainer } from '../styles'

const Wineries = ({wineries, onChangeRating, onAddRating}) => {

    const displayWineries = wineries.map(winery => {
         return (<li key={winery.id} style={{listStyle:'none'}}>
            <WineryCard  winery={winery} onChangeRating={onChangeRating} onAddRating={onAddRating}/>
          </li>)
    })

  return (
    <CardContainer>{displayWineries}</CardContainer>
  )
}

export default Wineries