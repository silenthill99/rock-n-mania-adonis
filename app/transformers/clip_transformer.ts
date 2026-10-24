import { BaseTransformer } from '@adonisjs/core/transformers'
import type Clip from '#models/clip'

export default class ClipTransformer extends BaseTransformer<Clip> {
  toObject() {
    return this.pick(this.resource, ['id', 'title', 'url'])
  }
}
