import { type ComponentProps, useState } from 'react'
import Input from '~/components/input'

type Props = {
  label: string
  name: string
  imageUrl: string
  error: string | undefined
} & ComponentProps<'input'>

const FileInput = ({ label, name, imageUrl, error, ...props }: Props) => {
  const [image, setImage] = useState(imageUrl)
  return (
    <div>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <Input
        type="file"
        id={name}
        name={name}
        {...props}
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (file) {
            const url = URL.createObjectURL(file)
            setImage(url)
          }
        }}
      />
      {error && <p className="text-error">{error}</p>}
      {image && <img src={image} alt="Visuel" className={"mt-5 rounded-lg"} width={200} />}
    </div>
  )
}

export default FileInput
