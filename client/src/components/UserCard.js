import React from 'react'; 
import { Card, CardBody, CardHeader, CardHeading, CardScroller } from '../styles';
import StarRatingShow from './StarRatingShow';

const UserCard = ({user, wineries}) => {

    const visitedWineries = user.visits.map(visit => {
        const targetWinery = wineries.find(winery => visit.wineryId === winery.id)
        const wineryName = targetWinery.name
        console.log(wineryName)
        return (<li>{wineryName}: <StarRatingShow rating={visit.rating}/></li>)
    })
  
 return (
    <Card>
        <CardHeader>
            <CardHeading>{user.username}</CardHeading>
        </CardHeader>
        <CardBody>
            <CardHeading style={{'font-size':'1.1em', color:'rgb(150,78,108)' }}>Wineries Visited:</CardHeading>
            <CardScroller>
                {visitedWineries}
            </CardScroller>
        </CardBody>
    </Card>
  
  )
}

export default UserCard