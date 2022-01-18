/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  //truncate all existing tables
  await knex.raw('TRUNCATE TABLE "user" CASCADE');
  await knex.raw('TRUNCATE TABLE "channel" CASCADE');
  await knex.raw('TRUNCATE TABLE "video" CASCADE');

  await knex("channel").insert([
    {
      id: 1,
      name: "channel1",
    },
    {
      id: 2,
      name: "channel2",
    },
  ]);

  await knex("user").insert([
    {
      id: 1,
      name: "user1",
      email: "user1@test.com",
      channelId: 1,
    },
    {
      id: 2,
      name: "user2",
      email: "user2@test.com",
    },
    {
      id: 3,
      name: "user3",
      email: "user3@test.com",
      channelId: 2,
    },
  ]);

  return knex("video").insert([
    {
      id: 1,
      title: "video1",
      channelId: 1,
    },
    {
      id: 2,
      title: "video2",
      channelId: 2,
    },
  ]);
};
