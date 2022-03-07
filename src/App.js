import React from 'react'
import useDarkMode from './hooks/dark-mode'
import './App.css'

import Products from './components/Products/Products'
import Auth from './components/Auth'
import { useLogin } from './context/auth-context'

const App = (props) => {
  const [theme, toggleTheme] = useDarkMode()

  const login = useLogin()

  return (
    login.isAuth ?
    <div className='app'
      style={{
        background: theme === 'dark' ? '#212121' : '#ffffff',
        color: theme === 'dark' ? '#ffffff' : '#212121',
        transition: '.2s all ',
        textAlign: 'center'
      }}
    >
      <Products />
      <button onClick={toggleTheme}>
        تغییر تم
      </button>
    </div> : <Auth />    
  )
}

export default App
