'use strict';

const { Model } = require('objection');

class Player extends Model {

  static get tableName() {
    return 'players';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: ['null', 'string'] },
        level: { type: ['null', 'string'] },
        birthdate: { type: ['null', 'string'] },
        raw_age: { type: ['null', 'integer'] },
        ulmg_team: { type: ['null', 'integer'] },
        positions: {
          type: ['null', 'object'],
          properties: {
            pos_c: { type: ['null', 'boolean'] },
            pos_1b: { type: ['null', 'boolean'] },
            pos_2b: { type: ['null', 'boolean'] },
            pos_3b: { type: ['null', 'boolean'] },
            pos_ss: { type: ['null', 'boolean'] },
            pos_rf: { type: ['null', 'boolean'] },
            pos_cf: { type: ['null', 'boolean'] },
            pos_lf: { type: ['null', 'boolean'] },
            pos_p: { type: ['null', 'boolean'] }
          }
        },
        defense: {
          type: ['null', 'object'],
          properties: {
            pos_c: { type: ['null', 'string'] },
            pos_1b: { type: ['null', 'string'] },
            pos_2b: { type: ['null', 'string'] },
            pos_3b: { type: ['null', 'string'] },
            pos_ss: { type: ['null', 'string'] },
            pos_rf: { type: ['null', 'string'] },
            pos_cf: { type: ['null', 'string'] },
            pos_lf: { type: ['null', 'string'] }
          }
        },
        refs: {
          type: ['null', 'object'],
          properties: {
            fg: { type: ['null', 'string'] },
            mlbam: { type: ['null', 'string'] },
            mlb: { type: ['null', 'string'] },
            bref: { type: ['null', 'string'] }
          }
        },
        rosters: {
          type: ['null', 'object'],
          properties: {
            ulmg_team: { type: ['null', 'string'] },
            ulmg_level: { type: ['null', 'string'] },
            real_team: { type: ['null', 'string'] },
            real_level: { type: ['null', 'string'] }
          }
        },
        protections: {
          type: ['null', 'object'],
          properties: {
            ulmg: { type: ['null', 'string'] }
          }
        },
        stats: {
          type: ['null', 'array']
        },
      }
    }
  }
}

module.exports = {
  Player,
};