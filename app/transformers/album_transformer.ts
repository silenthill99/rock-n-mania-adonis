import { BaseTransformer } from '@adonisjs/core/transformers'
import type Album from '#models/album'

export default class AlbumTransformer extends BaseTransformer<Album> {
  toObject() {
    return this.pick(this.resource, ['id'])
  }
}
