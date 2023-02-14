import React from 'react'
import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'

const Login = ({setCurrentUser}) => {
  return (
    <div>
        <LoginForm setCurrentUser={setCurrentUser} />
        <Link to='/signup'>Not a Member? Sign up now!</Link>
    </div>
  )
}

export default Login