import clsx from 'clsx'

export type DynamicIconProps = {
  color: keyof typeof gradients
  id: string
}
export const gradients = {
  blue: [
    { stopColor: '#0EA5E9' },
    { stopColor: '#22D3EE', offset: '.527' },
    { stopColor: '#818CF8', offset: 1 },
  ],
  amber: [
    { stopColor: '#FDE68A', offset: '.08' },
    { stopColor: '#F59E0B', offset: '.837' },
  ],
} as const

export function Gradient({
  color = 'blue',
  ...props
}: {
  color: keyof typeof gradients
} & React.SVGProps<SVGLinearGradientElement>) {
  return (
    <radialGradient
      cx={0}
      cy={0}
      r={1}
      gradientUnits="userSpaceOnUse"
      {...props}
    >
      {gradients[color].map((stop, stopIndex) => (
        <stop key={stopIndex} {...stop} />
      ))}
    </radialGradient>
  )
}

export function LightMode({ className, ...props }: any) {
  return <g className={clsx('dark:hidden', className)} {...props} />
}

export function DarkMode({ className, ...props }: any) {
  return <g className={clsx('hidden dark:inline', className)} {...props} />
}
