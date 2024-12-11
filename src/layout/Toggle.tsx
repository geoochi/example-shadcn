import { Bold } from 'lucide-react'

import { Toggle } from '@/components/ui/toggle'

export default function ToggleDemo() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Toggle aria-label='Toggle bold'>
        <Bold className='h-4 w-4' />
      </Toggle>
    </div>
  )
}
