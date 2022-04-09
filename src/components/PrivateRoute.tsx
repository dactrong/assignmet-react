import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuthenticate } from '../utils/localStogate'

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRoute = (props: PrivateRouterProps) => {
    const { user: { role } } = isAuthenticate()
    if (!role){
        return <Navigate to="/" />
    }
      return  props.children
}

export default PrivateRoute