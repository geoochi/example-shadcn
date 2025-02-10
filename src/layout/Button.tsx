import { Button } from '@/components/ui/button'

export default function ButtonDemo() {
  return (
    <div className='flex flex-col gap-4'>
      <Button>Button</Button>
      <Button variant='secondary'>Secondary</Button>
      <Button variant='outline'>Outline</Button>
      <Button variant='ghost'>Ghost</Button>
      <Button variant='link'>Link</Button>
    </div>
  )
}
