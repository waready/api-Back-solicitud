'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TrazabilidadSchema extends Schema {
  up () {
    this.create('trazabilidad', (table) => {
      table.increments()
      table.integer('solicitud_id').unsigned().references('id').inTable('solicitudes')
      table.integer('oficina_id').unsigned().references('id').inTable('oficinas')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.date('fecha_ingreso')
      table.date('fecha_egreso')
      table.timestamps()
    })
  }

  down () {
    this.drop('trazabilidad')
  }
}

module.exports = TrazabilidadSchema
