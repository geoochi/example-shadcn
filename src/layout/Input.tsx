import { Input } from '@/components/ui/input'

export default function InputDemo() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Input className='w-[300px]' type='email' placeholder='Email' />
    </div>
  )
}
