'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SolicitudesSchema extends Schema {
  up () {
    this.create('solicitudes', (table) => {
      table.increments()
      table.string('cut',10)
      table.integer('interesado_id').unsigned().references('id').inTable('interesados')
      table.integer('tipo_id').unsigned().references('id').inTable('tipo_solicitud')
      table.string('url_documento', 100)
      table.enum('state', ['1', '0']).default('1').comment('1:activo|0:inactivo')
      table.timestamps()
    })
  }

  down () {
    this.drop('solicitudes')
  }
}

module.exports = SolicitudesSchema
