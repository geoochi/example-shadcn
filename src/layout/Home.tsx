import routes from '@/routes'
import { Link } from 'react-router'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div
        className={cn(
          'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
          'gap-4 w-full max-w-7xl px-4'
        )}
      >
        {routes.map(
          route =>
            route.name !== 'Home' && (
              <Link
                className={cn(
                  'text-center px-10 py-4 outline outline-1 outline-gray-300',
                  'hover:bg-gray-100 rounded-md'
                )}
                key={route.path}
                to={route.path}
              >
                {route.name}
              </Link>
            )
        )}
      </div>
    </div>
  )
}
