import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate, useParams } from 'react-router-dom'

export default function Profile() {

  const {username} = useParams();

  return (
    <div>
      <h1>Welcome, {username}</h1>
    </div>
  )
}
