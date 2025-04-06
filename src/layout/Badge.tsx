import { Badge } from '@/components/ui/badge'

export default function BadgeDemo() {
  return (
    <div className='flex flex-col items-center gap-4'>
      <Badge>Badge</Badge>
      <Badge variant='secondary'>secondary</Badge>
      <Badge variant='outline'>outline</Badge>
      <Badge variant='destructive'>destructive</Badge>
    </div>
  )
}
