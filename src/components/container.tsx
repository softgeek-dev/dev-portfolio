import { cn } from '@/lib/utils'

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'mx-auto max-w-[120rem] w-screen xl:px-20 md:px-8 sm:px-7 px-7',
        className
      )}
    >
      {children}
    </div>
  )
}
