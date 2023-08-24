import { createContext, useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './Api'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  const getUser = async (token) => {
    const { url, options } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json()
    console.log(json)
    setData(json)
    setLogin(true)
  }

  const userLogin = async (username, password) => {
    try {
      setError(null)
      setLoading(true)
      const { url, options } = TOKEN_POST({ username, password })
      const response = await fetch(url, options)
      if (!response.ok) throw new Error('Usuário ou senha incorretos')
      const { token } = await response.json()
      window.localStorage.setItem('token', token)
      await getUser(token)
      navigate('/conta')
    } catch (err) {
      console.log(err.message)
      setError(err.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }

  const userLogout = useCallback(async () => {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)
    window.localStorage.removeItem('token')
    navigate('/login')
  }, [navigate])

  useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token')
      if (token) {
        try {
          setError(null)
          setLoading(true)
          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if (!response.ok) throw new Error('Token inválido')
          await getUser(token)
        } catch (err) {
          console.log('Error: ', err.message)
          userLogout()
        } finally {
          setLoading(false)
        }
      }
    }
    autoLogin()
  }, [userLogout])


  return (
    <UserContext.Provider value={{ userLogin, getUser, userLogout, data, login, loading, error }}>
      {children}
    </UserContext.Provider>
  )
}