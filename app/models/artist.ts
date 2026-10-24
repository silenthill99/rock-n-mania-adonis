import { ArtistSchema } from '#database/schema'
import { manyToMany } from '@adonisjs/lucid/orm'
import Album from '#models/album'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'

export default class Artist extends ArtistSchema {
  @manyToMany(() => Album)
  declare albums: ManyToMany<typeof Album>
}
