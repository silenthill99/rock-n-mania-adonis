import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'artists'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('type').notNullable()
      table.string('name').notNullable().unique()
      table.string('slug').notNullable().unique()
      table.date('started_at').notNullable()
      table.date('ended_at')
      table.string('image_path')
      table.string('logo_path')
      table.string('country')
      table.string('city')
      table.text('short_biography').notNullable()
      table.text('website_url')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })

    this.schema.createTable('album_artist', (table) => {
      table.integer('album_id').unsigned().notNullable()
      table.foreign('album_id').references('albums.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.integer('artist_id').unsigned().notNullable()
      table.foreign('artist_id').references('artists.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.unique(['album_id', 'artist_id'])
    })
  }

  async down() {
    this.schema.dropTable('album_artist')
    this.schema.dropTable(this.tableName)
  }
}
