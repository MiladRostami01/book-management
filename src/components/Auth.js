import React from 'react'

import Card from './UI/Card'
import { useLogin } from '../context/auth-context'

import './Auth.css'

const Auth = (props) => {
  const login = useLogin()

  const loginHandler = () => {
    login.login()
  }

  return (
    <div className="auth">
      <Card>
        <p>لطفا برای ادامه وارد شوید.</p>
        <button onClick={loginHandler}>ورورد</button>
      </Card>
    </div>
  )
}

export default Auth
