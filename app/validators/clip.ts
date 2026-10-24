import vine from '@vinejs/vine'

export const clipValidator = vine.create({
  title: vine.string(),
  url: vine
    .string()
    .url()
    .regex(
      /^(?:https?:\/\/)?(?:www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[a-zA-Z0-9_-]{11}(&.*)?$/
    ),
})
