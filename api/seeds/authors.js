/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('authors').del()
  await knex('authors').insert([
    { name: 'Dustin Jordan', status: "Awesome" },
    { name: 'Evan Bonk', status: "Wizard" },
  ]);
};
