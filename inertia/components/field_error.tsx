import { type ComponentProps } from 'react'

type Props = {
  error: string
} & ComponentProps<'span'>

const FieldError = ({ error, ...props }: Props) => {
  return (
    <span className="text-[12.5px] text-[#e0685c]" {...props}>
      {error}
    </span>
  )
}

export default FieldError
