import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'artists'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropNullable('image_path')
      table.dropNullable('country')
      table.dropNullable('city')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.setNullable('image_path')
      table.setNullable('country')
      table.setNullable('city')
    })
  }
}
