import { HashRouter, Routes, Route, useLocation } from 'react-router'
import routes from './routes'
import { Button } from './components/ui/button'

const pageNames = ['/page']

function AppContent() {
  const location = useLocation()

  return (
    <div className='flex h-screen flex-col'>
      {!pageNames.includes(location.pathname) && (
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

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  )
}
