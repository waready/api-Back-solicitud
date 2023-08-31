'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OficinasSchema extends Schema {
  up () {
    this.create('oficinas', (table) => {
      table.increments()
      table.string('nombres', 80).notNullable()
      table.enum('state', ['1', '0']).default('1').comment('1:activo|0:inactivo')
      table.timestamps()
    })
  }

  down () {
    this.drop('oficinas')
  }
}

module.exports = OficinasSchema
