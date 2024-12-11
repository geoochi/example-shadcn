import routes from '@/routes'
import { Link } from 'react-router'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col gap-2'>
        {routes.map(
          route =>
            route.name !== 'Home' && (
              <Link
                className={cn(
                  'text-center px-10 py-4 outline outline-1 outline-gray-300',
                  ' hover:bg-gray-100 rounded-md'
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
