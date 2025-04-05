import routes from '@/routes'
import { Link } from 'react-router'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div
      className={cn(
        'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        'w-full max-w-7xl gap-4 px-4'
      )}
    >
      {routes.map(
        route =>
          route.name !== 'Home' && (
            <Link
              className={cn(
                'px-10 py-4 text-center outline outline-gray-300 dark:outline-gray-700',
                'rounded-md hover:bg-gray-100 dark:hover:bg-gray-900'
              )}
              key={route.path}
              to={route.path}
            >
              {route.name}
            </Link>
          )
      )}
    </div>
  )
}
