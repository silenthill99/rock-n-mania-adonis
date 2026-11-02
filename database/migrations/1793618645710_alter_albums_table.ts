import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'albums'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('releasedAt', 'released_at')
      table.renameColumn('trackList', 'tracklist')
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.renameColumn('released_at', 'releasedAt')
      table.renameColumn('tracklist', 'trackList')
    })
  }
}
