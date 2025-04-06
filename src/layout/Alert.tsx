import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Terminal, AlertCircle } from 'lucide-react'

export default function AlertDemo() {
  return (
    <div className='flex flex-col gap-4'>
      <Alert className='max-w-md'>
        <Terminal className='h-4 w-4' />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components and dependencies to your app using the cli.</AlertDescription>
      </Alert>
      <Alert variant='destructive'>
        <AlertCircle className='h-4 w-4' />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
      </Alert>
    </div>
  )
}
