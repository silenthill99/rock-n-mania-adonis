import { type ComponentProps } from 'react'

type Props = {
  className?: string
} & ComponentProps<'input'>

const Input = ({ className, ...props }: Props) => {
  const base = props.type === 'file' ? 'file-input' : 'input'

  if (props.type === 'checkbox') {
    throw new Error('Unavailable type')
  }

  return <input className={`text-black ${base} ${className}`} {...props} />
}

export default Input
