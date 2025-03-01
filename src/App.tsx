import { Routes, Route, useLocation, useNavigate } from 'react-router'
import { useEffect } from 'react'
import routes from './routes'
const pageIgnores = ['/page', '/sidebar']

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  // key bind esc to return to home
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        navigate('/')
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [navigate])
  return (
    <div className='flex h-screen flex-col'>
      {!pageIgnores.includes(location.pathname) && (
        <p className='text-center text-8xl text-gray-100'>
          press esc to return
        </p>
      )}
      <div className='flex flex-1 items-center justify-center'>
        <Routes>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </div>
    </div>
  )
}
