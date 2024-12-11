import { Badge } from '@/components/ui/badge'

export default function BadgeDemo() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-4'>
      <Badge>Badge</Badge>
      <Badge variant='secondary'>secondary</Badge>
      <Badge variant='outline'>outline</Badge>
      <Badge variant='destructive'>destructive</Badge>
    </div>
  )
}
