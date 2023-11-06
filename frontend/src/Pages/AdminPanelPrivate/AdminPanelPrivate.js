import React, { useContext } from 'react'
import authContext from '../../Contexts/authContext'
import { useNavigate } from 'react-router-dom'

export default function AdminPanelPrivate({children}) {

    const AuthContext = useContext(authContext)

   const navigate = useNavigate()

  return (
    <>
    
    {
        AuthContext.userInfos.role === 'ADMIN' ? <>{children}</> : navigate('/login') 
    }
    
    </>
  )
}

