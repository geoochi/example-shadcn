import { cn } from '@/lib/utils'
import { Slider } from '@/components/ui/slider'

type SliderProps = React.ComponentProps<typeof Slider>

export default function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        className={cn('w-[60%]', className)}
        {...props}
      />
    </div>
  )
}
