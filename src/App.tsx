import { Routes, Route, useLocation } from 'react-router'
import routes from './routes'
const pageIgnores = ['/page', '/sidebar']

export default function App() {
  const location = useLocation()

  return (
    <div className='flex h-screen flex-col'>
      {!pageIgnores.includes(location.pathname) && (
        <div
          className='flex h-28 cursor-pointer justify-center rounded-none bg-gray-300 text-8xl text-white hover:bg-gray-400'
          onClick={() => (window.location.href = '#')}
        >
          <p>return</p>
        </div>
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
