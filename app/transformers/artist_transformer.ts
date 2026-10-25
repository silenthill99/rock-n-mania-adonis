import { BaseTransformer } from '@adonisjs/core/transformers'
import type Artist from '#models/artist'

export default class ArtistTransformer extends BaseTransformer<Artist> {
  toObject() {
    return this.pick(this.resource, [
      'id',
      'city',
      'country',
      'createdAt',
      'endedAt',
      'id',
      'imagePath',
      'logoPath',
      'name',
      'shortBiography',
      'slug',
      'startedAt',
      'type',
      'updatedAt',
      'websiteUrl',
    ])
  }
}
