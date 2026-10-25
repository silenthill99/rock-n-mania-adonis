import vine from '@vinejs/vine'

export const createArtist = vine.create({
  city: vine.string().maxLength(255),
  country: vine.string().maxLength(255),
  ended_at: vine.date().nullable(),
  image: vine.file({
    extnames: ['jpeg', 'jpg', 'png', 'webp'],
    size: '8G',
  }),
  logo: vine
    .file({
      extnames: ['jpg', 'jpeg', 'png', 'webp'],
      size: '8G',
    })
    .nullable(),
  name: vine.string().maxLength(255),
  short_biography: vine.string(),
  started_at: vine.date(),
  type: vine.string(),
  website_url: vine.string().url().maxLength(255),
})

export const updateArtist = vine.create({
  city: vine.string().maxLength(255),
  country: vine.string().maxLength(255),
  ended_at: vine.date().nullable(),
  image: vine
    .file({
      extnames: ['jpeg', 'jpg', 'png', 'webp'],
      size: '8G',
    })
    .nullable(),
  logo: vine
    .file({
      extnames: ['jpg', 'jpeg', 'png', 'webp'],
      size: '8G',
    })
    .nullable(),
  name: vine.string().maxLength(255),
  short_biography: vine.string(),
  started_at: vine.date(),
  type: vine.string(),
  website_url: vine.string().url().maxLength(255),
})
