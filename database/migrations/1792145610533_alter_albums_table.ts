import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'albums'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropNullable('name')
      table.dropNullable('releasedAt')
      table.dropNullable('slug')
      table.text('trackList').notNullable().alter()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.setNullable('name')
      table.setNullable('releasedAt')
      table.setNullable('slug')
      table.setNullable('trackList')
    })
  }
}
