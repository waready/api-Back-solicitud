'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdjuntosSchema extends Schema {
  up () {
    this.create('adjuntos', (table) => {
      table.increments()
      table.string('url', 100)
      table.timestamps()
    })
  }

  down () {
    this.drop('adjuntos')
  }
}

module.exports = AdjuntosSchema
