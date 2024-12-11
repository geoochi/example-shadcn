import { Badge } from '@/components/ui/badge'

export default function BadgeDemo() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center h-screen'>
      <Badge>Badge</Badge>
      <Badge variant='secondary'>secondary</Badge>
      <Badge variant='outline'>outline</Badge>
      <Badge variant='destructive'>destructive</Badge>
    </div>
  )
}
