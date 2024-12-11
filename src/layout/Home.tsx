import routes from '@/routes'
import { Link } from 'react-router'
import { cn } from '@/lib/utils'

export default function Home() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col gap-2'>
        {routes.map(route => (
          <Link
            className={cn(
              'text-center px-10 py-4 bg-gray-200',
              ' hover:bg-blue-500 hover:text-white rounded-md'
            )}
            to={route.path}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
