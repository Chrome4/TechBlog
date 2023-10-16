const sequelize = require("../config/connection");
const { User, BlogPost, Comment } = require("../models");

const userData = [
  {
    username: "test123",
    password: "password!",
  },
  {
    username: "test321",
    password: "password123",
  },
];

const poSeedData = [
  {
    title: "The rumors of the one eye man",
    description: "Is he knocking on your door?",
    user_id: 1,
  },
  {
    title: "The sky is falling",
    description: "Chicken little might be of some use.",
    user_id: 2,
  },
];

const commSeedData = [
  {
    comment_text: "I think I heard him last night",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "Oh no we are all doomed!",
    user_id: 1,
    post_id: 2,
  },
];

const seedDataBase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await BlogPost.bulkCreate(poSeedData);

  await Comment.bulkCreate(commSeedData);

  process.exit(0);
};

seedDataBase();
