import { type ComponentProps } from 'react'

type Props = {
  className?: string
} & ComponentProps<'input'>

const Input = ({ className, ...props }: Props) => {
  return <input className={`input text-black ${className}`} {...props} />
}

export default Input
