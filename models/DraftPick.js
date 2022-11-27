'use strict';

const { Model } = require('objection');

class DraftPick extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'draftpicks';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        draft_type: { type: ['null', 'string'] },
        slug: { type: ['null', 'string'] },
        season: { type: ['null', 'string'] },
        team_name: { type: ['null', 'string'] },
        player_name: { type: ['null', 'string'] },
        draft_round: { type: ['null', 'integer'] },
        year: { type: ['null', 'string'] },
        pick_number: { type: ['null', 'integer'] },
        overall_pick_number: { type: ['null', 'integer'] },
        player: { type: ['null', 'integer'] },
        team: { type: ['null', 'integer'] },
        original_team: { type: ['null', 'integer'] },
        skipped: { type: ['null', 'boolean'] },
      }
    }
  }
}

module.exports = {
  DraftPick,
};