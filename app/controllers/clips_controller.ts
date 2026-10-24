import type { HttpContext } from '@adonisjs/core/http'
import Clip from '#models/clip'
import ClipTransformer from '#transformers/clip_transformer'
import { clipValidator } from '#validators/clip'

export default class ClipsController {
  async index({ inertia }: HttpContext) {
    const clips = await Clip.all()
    return inertia.render('clips/index', { clips: ClipTransformer.transform(clips) })
  }
  async create({ inertia }: HttpContext) {
    const clip = new Clip()
    return inertia.render('clips/forms', { clip: ClipTransformer.transform(clip) })
  }
  async store({ request, response, auth }: HttpContext) {
    const data = await request.validateUsing(clipValidator)
    await Clip.create({ ...data, userId: auth.getUserOrFail().id })
    return response.redirect().toRoute('clips.index')
  }
  async edit({ params, inertia }: HttpContext) {
    const clip = await Clip.findOrFail(params.id)
    return inertia.render('clips/forms', { clip: ClipTransformer.transform(clip) })
  }
  async update({ params, request, response }: HttpContext) {
    const clip = await Clip.findOrFail(params.id)
    const data = await request.validateUsing(clipValidator)
    clip.merge(data)
    return response.redirect().toRoute('clips.index')
  }
  async delete({ params, response }: HttpContext) {
    const clip = await Clip.findOrFail(params.id)
    clip.delete()
    return response.redirect().toRoute('clips.index')
  }
}
