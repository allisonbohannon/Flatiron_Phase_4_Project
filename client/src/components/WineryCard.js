import React from 'react'

const WineryCard = ({winery}) => {
    console.log(winery)

    const {name, appellation, comments, visits } = winery

    const visitsArr = []

    visits.forEach(visit => visitsArr.push(visit.rating))

    const averageRating = visitsArr.reduce((a,b) => a + b)/visits.length

  return (
    <div>
        <p>Name: {name}</p>
        <p>Appellation: {appellation}</p>
        <p>Comments: {comments.length}</p>
        <p>Visits: {visits.length}</p>
        <p>Rating: {averageRating}</p>
    </div>
  )
}

export default WineryCard