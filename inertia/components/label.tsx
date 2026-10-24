import { type ComponentProps, type PropsWithChildren } from 'react'

const Label = ({ children, ...props }: PropsWithChildren & ComponentProps<'label'>) => {
  return (
    <label className="label text-white" {...props}>
      {children}
    </label>
  )
}

export default Label
