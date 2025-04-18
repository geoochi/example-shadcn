import { Checkbox } from '@/components/ui/checkbox'

export default function CheckboxDemo() {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox id='terms' />
      <label
        htmlFor='terms'
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Accept terms and conditions
      </label>
    </div>
  )
}
