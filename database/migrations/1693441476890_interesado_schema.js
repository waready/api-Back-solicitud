'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InteresadoSchema extends Schema {
  up () {
    this.create('interesados', (table) => {
      table.increments()
      table.string('nombres', 80).notNullable()
      table.string('paterno', 80).notNullable()
      table.string('materno', 80).notNullable()
      table.string('nro_documento',8).notNullable()
      table.string('celular',9).notNullable()
      table.string('email', 254).notNullable().unique()
      table.enum('tipo', ['1', '2', '3']).notNullable().defaultTo('1').comment('1:activo|0:inactivo')
      table.timestamps()
    })
  }

  down () {
    this.drop('interesados')
  }
}

module.exports = InteresadoSchema
