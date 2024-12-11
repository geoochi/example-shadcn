import { Textarea } from '@/components/ui/textarea'

export default function TextareaDemo() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='w-[500px]'>
        <Textarea placeholder='Type your message here.' />
      </div>
    </div>
  )
}
