import React from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';



const WineryDetail = ({wineries}) => {

  const { wineryId } = useParams()
  console.log(typeof parseInt(wineryId))

  const wineryShow = wineries.find(winery => winery.id === parseInt(wineryId))

  return (
    <div>
      <Button>Back to Wineries</Button>
      <br></br>
      <Card>
        <Card.Body>
          <Card.Text>Winery: {wineryShow.name}</Card.Text>
          <Card.Text>Appellation: {wineryShow.appellation}</Card.Text>
          <Card.Subtitle>Ratings</Card.Subtitle>
          <Card.Subtitle>Comments</Card.Subtitle>
        </Card.Body>
      </Card>

    </div>
  )
}

export default WineryDetail