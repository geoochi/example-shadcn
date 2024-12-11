import { Input } from '@/components/ui/input'

export default function InputDemo() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Input className='w-[300px]' type='email' placeholder='Email' />
    </div>
  )
}
