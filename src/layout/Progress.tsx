import { useEffect, useState } from 'react'

import { Progress } from '@/components/ui/progress'

export default function ProgressDemo() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ratio = 0
    const timer = setInterval(() => {
      ratio += 0.1
      if (ratio <= 1) {
        setProgress(100 * ratio)
      } else {
        clearInterval(timer)
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return <Progress value={progress} className='max-w-sm' />
}
