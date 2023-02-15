import React from 'react'
import UserCard from '../components/UserCard'
import { CardContainer } from '../styles'

const Users = ({users, wineries}) => {

  const displayUsers = users.map(user => {
    return <UserCard key={user.id} user={user} wineries={wineries}/>
})

  return (
    <CardContainer>{displayUsers}</CardContainer>
  )
}

export default Users