import { useState } from 'react'

import { Calendar } from '@/components/ui/calendar'

export default function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className='flex h-screen items-center justify-center'>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border'
      />
    </div>
  )
}
