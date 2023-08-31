'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TipoSolicitudSchema extends Schema {
  up () {
    this.create('tipo_solicitud', (table) => {
      table.increments()
      table.string('nombres', 80)
      table.timestamps()
    })
  }

  down () {
    this.drop('tipo_solicitud')
  }
}

module.exports = TipoSolicitudSchema
