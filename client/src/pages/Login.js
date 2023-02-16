import React from 'react'
import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'


const Login = ({}) => {
  return (
    <div>
        <LoginForm />
        <Link to='/signup'>Not a Member? Sign up now!</Link>
    </div>
  )
}

export default Login