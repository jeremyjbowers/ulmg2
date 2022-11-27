'use strict';

const { Model } = require('objection');

class Team extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'teams';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        owner: { type: ['null', 'string'] },
        owner_email: { type: ['null', 'string'] },
        city: { type: ['null', 'string'] },
        nickname: { type: ['null', 'string'] },
        abbreviation: { type: ['null', 'string'] },
        championships: { type: ['null', 'array'] },
      }
    }
  }
}

module.exports = {
  Team,
};