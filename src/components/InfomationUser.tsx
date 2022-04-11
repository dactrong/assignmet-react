import React from 'react'
import { isAuthenticate } from '../utils/localStogate'

type Props = {}

const InfomationUser = (props: Props) => {
    const  {user } = isAuthenticate()
  return (
    <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.address}</h1>
       
    </div>
  )
}

export default InfomationUser