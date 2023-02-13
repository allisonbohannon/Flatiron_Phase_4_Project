import React from 'react'
import { useParams } from 'react-router-dom'
import CommentCard from '../components/CommentCard';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';



const WineryDetail = ({wineries, currentUser}) => {

  const { wineryId } = useParams()

  const displayWinery = wineries.find(winery => winery.id === parseInt(wineryId))

  const displayComments = displayWinery.comments.map(comment => {
    return <CommentCard key={comment.id} comment={comment} winery={displayWinery} currentUser={currentUser}/> 
  })
  

  return (
    <div>
      <Button>Back to Wineries</Button>
      <br></br>
      <Card>
        <Card.Body>
          <Card.Text>Winery: {displayWinery.name}</Card.Text>
          <Card.Text>Appellation: {displayWinery.appellation}</Card.Text>
          <Card.Subtitle>Ratings: TBD</Card.Subtitle>
          <Card.Subtitle>Comments: {displayComments}</Card.Subtitle>
        </Card.Body>
      </Card>

    </div>
  )
}

export default WineryDetail