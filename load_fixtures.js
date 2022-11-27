'use strict';

const Knex = require('knex');
const knexConfig = require('./knexfile');

const { Model } = require('objection');
const { Player } = require('./models/Player');
const { Team } = require('./models/Team');
const { DraftPick } = require('./models/DraftPick')

const fs = require('fs')

let parse_fixture_draftpick = function(pfx) {
  var payload = {}

  payload.id = pfx.pk
  payload.player = pfx.fields.player
  payload.team = pfx.fields.team
  payload.original_team = pfx.fields.original_team
  payload.draft_type = pfx.fields.draft_type
  payload.team_name = pfx.fields.team_name
  payload.player_name = pfx.fields.player_name
  payload.draft_round = pfx.fields.draft_round
  payload.year = pfx.fields.year
  payload.pick_number = pfx.fields.pick_number
  payload.overall_pick_number = pfx.fields_overall_pick_number
  payload.slug = pfx.fields.slug
  payload.season = pfx.fields.season

  return payload;
}

let parse_fixture_team = function(pfx) {
  var payload = {}

  payload.id = pfx.pk
  payload.owner = pfx.fields.owner_email
  payload.owner_email = pfx.fields.owner_email
  payload.abbreviation = pfx.fields.abbreviation
  payload.city = pfx.fields.city
  payload.nickname = pfx.fields.nickname
  payload.championships = JSON.parse(pfx.fields.championships);

  return payload;
}

let parse_fixture_player = function(pfx) {
    var payload = {}

    payload.id = pfx.pk
    payload.first_name = pfx.fields.first_name
    payload.last_name = pfx.fields.last_name
    payload.name = pfx.fields.name
    payload.level = pfx.fields.level
    payload.birthdate = pfx.fields.birthdate
    payload.raw_age = pfx.fields.raw_age
    payload.ulmg_team = pfx.fields.team
    payload.refs = {"fg": pfx.fields.fg_id, "bref": pfx.fields.bref_id, "mlbam": pfx.fields.mlbam_id, "mlb": pfx.fields.mlb_dotcom}

    return payload;
}

// Initialize knex.
const knex = Knex(knexConfig.development);

// Bind all Models to the knex instance. You only
// need to do this once before you use any of
// your model classes.
Model.knex(knex);

async function main() {
  // Delete all persons from the db.
  await Player.query().delete();
  await Team.query().delete();
  await DraftPick.query().delete();

  let ulmg_models = fs.readFileSync('./fixtures/ulmg.json');
  let parsed_models = JSON.parse(ulmg_models);
  
  for (const model of parsed_models) {
    if (model.model == "ulmg.draftpick") {
      var draftpick_obj = parse_fixture_draftpick(model);
      await DraftPick.query().insert(draftpick_obj);
    }

    if (model.model == "ulmg.team") {
      var team_obj = parse_fixture_team(model);
      await Team.query().insert(team_obj);
    }

    if (model.model == "ulmg.player") {
      var player_obj = parse_fixture_player(model);
      await Player.query().insert(player_obj);
    }
  }

}

main()
  .then(() => knex.destroy())
  .catch((err) => {
    console.error(err);
    return knex.destroy();
  });