'use strict';

exports.up = (knex) => {
    return knex.schema.createTable('players', (table) => {
        table.increments('id').primary();
        table.string('first_name').nullable();
        table.string('last_name').nullable();
        table.string('name').nullable();
        table.string('level').nullable();
        table.string('birthdate').nullable();
        table.integer('raw_age').nullable();
        table.integer('ulmg_team').unsigned().references('teams.id').nullable();
        table.json('positions').nullable();
        table.json('defense').nullable();
        table.json('refs').nullable();
        table.json('rosters').nullable();
        table.json('protections').nullable();
    }).createTable('teams', (table) => {
        table.increments('id').primary();
        table.string('owner').nullable();
        table.string('owner_email').nullable();
        table.string('abbreviation').nullable();
        table.string('city').nullable();
        table.string('nickname').nullable();
        table.string('stadium').nullable();
        table.json('championships').nullable();
    }).createTable('draftpicks', (table) => {
        table.increments('id').primary();
        table.string('draft_type').nullable();
        table.string('slug').nullable();
        table.string('season').nullable();
        table.integer('draft_round').nullable();
        table.string('year').nullable();
        table.integer('pick_number').nullable();
        table.integer('overall_pick_number').nullable();
        table.integer('team').unsigned().references('teams.id').nullable();
        table.string('team_name').nullable();
        table.integer('player').unsigned().references('players.id').nullable();
        table.string('player_name').nullable();
        table.integer('original_team').unsigned().references('teams.id').nullable();
        table.boolean('skipped').nullable();
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('players').dropTableIfExists('teams').dropTableIfExists('draftpicks');
};