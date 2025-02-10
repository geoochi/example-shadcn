import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const srcs = ['https://github.com/geoochi.png', 'https://github.com/shadcn.png']

export default function AvatarDemo() {
  return (
    <>
      {srcs.map((src, index) => (
        <Avatar
          key={src}
          className={`${index !== 0 ? '-ml-4' : ''} z-${10 - index}`}
        >
          <AvatarImage src={src} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ))}
    </>
  )
}
