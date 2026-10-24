import vine from '@vinejs/vine'

export const createAlbum = vine.create({
  artist_id: vine.array(vine.number().exists({ table: 'artists', column: 'id' })),
  deezer_url: vine
    .string()
    .url()
    .regex(/^(?:https?:\/\/)?(?:www\.)?deezer\.com\/(?:[a-z]{2}\/)?album\/\d+\/?$/)
    .nullable(),
  image: vine.file({
    size: '8G',
    extnames: ['jpeg', 'jpg', 'png', 'webp'],
  }),
  name: vine.string().maxLength(255),
  released_at: vine.date(),
  trackList: vine.string(),
})
