import type { HttpContext } from '@adonisjs/core/http'

import Artist from '#models/artist'
import ArtistTransformer from '#transformers/artist_transformer'
import { createArtist, updateArtist } from '#validators/artist'
import string from '@adonisjs/core/helpers/string'
import { randomUUID } from 'node:crypto'
import app from '@adonisjs/core/services/app'

export default class ArtistsController {
  async create({ inertia }: HttpContext) {
    const artist = new Artist()
    return inertia.render('artists/forms', {
      artist: ArtistTransformer.transform(artist),
    })
  }

  async store({ request, response }: HttpContext) {
    const {
      city,
      country,
      ended_at: endedAt,
      image,
      logo,
      name,
      short_biography: shortBiography,
      started_at: startedAt,
      type,
      website_url: websiteUrl,
    } = await request.validateUsing(createArtist)

    const slug = string.slug(name)

    const imageName = `${randomUUID()}.${image.extname}`
    const imagePath = `images/artists/${imageName}`
    await image.move(app.publicPath('/images/artists'), { name: imageName })

    let logoPath = ''

    if (logo) {
      const logoName = `${randomUUID()}.${logo.extname}`
      logoPath = `images/artists/logo/${logoName}`
      await logo.move(app.publicPath('/images/artists/logo'), { name: logoName })
    }

    await Artist.create({
      city,
      country,
      endedAt,
      imagePath,
      logoPath,
      name,
      shortBiography,
      slug,
      startedAt,
      type,
      websiteUrl,
    })

    return response.redirect().toRoute('home')
  }

  async edit({ params, inertia }: HttpContext) {
    const artist = await Artist.findOrFail(params.id)
    return inertia.render('artists/forms', {
      artist: ArtistTransformer.transform(artist),
    })
  }

  async update({ params, response, request }: HttpContext) {
    const artist = await Artist.findOrFail(params.id)
    const data = await request.validateUsing(updateArtist)
    artist.merge(data)
    return response.redirect().toRoute('home')
  }
}
