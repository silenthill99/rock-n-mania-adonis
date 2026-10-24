import type { HttpContext } from '@adonisjs/core/http'
import { createAlbum } from '#validators/album'
import Album from '#models/album'
import string from '@adonisjs/core/helpers/string'
import AlbumTransformer from '#transformers/album_transformer'
import { randomUUID } from 'node:crypto'
import app from '@adonisjs/core/services/app'
import Artist from '#models/artist'
import ArtistTransformer from '#transformers/artist_transformer'

export default class AlbumsController {
  async create({ inertia }: HttpContext) {
    const album = new Album()
    const artists = await Artist.all()

    return inertia.render('albums/forms', {
      album: AlbumTransformer.transform(album),
      artists: ArtistTransformer.transform(artists),
    })
  }
  async store({ auth, request, response }: HttpContext) {
    const {
      artist_id: artistIds,
      deezer_url: deezerUrl,
      image,
      name,
      released_at: releasedAt,
      trackList,
    } = await request.validateUsing(createAlbum)
    const slug = string.slug(name)

    const imageName = `${randomUUID()}.${image.extname}`
    await image.move(app.publicPath('/images/albums'), { name: imageName })
    const album = await auth
      .getUserOrFail()
      .related('albums')
      .create({
        deezerUrl,
        name,
        releasedAt,
        trackList,
        slug,
        imagePath: `/images/albums/${imageName}`,
      })
    await album.related('artists').attach(artistIds)
    return response.redirect().toRoute('dashboard')
  }
}
