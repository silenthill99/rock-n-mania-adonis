import type { HttpContext } from '@adonisjs/core/http'
import AlbumTransformer from '#transformers/album_transformer'

export default class DashboardController {
  async handle({ inertia, auth }: HttpContext) {
    const albums = await auth.getUserOrFail().related('albums').query()
    return inertia.render('dashboard', {
      albums: AlbumTransformer.transform(albums),
    })
  }
}
