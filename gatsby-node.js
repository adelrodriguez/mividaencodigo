'use strict';

const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

// For the Progress component
// Fetch Trello Board data and source to Gatsby
const REQUEST_URL = `${process.env.TRELLO_API_URL}/lists/${process.env.TRELLO_LIST_ID}/cards?key=${process.env.TRELLO_API_KEY}&token=${process.env.TRELLO_ACCESS_TOKEN}`;

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const result = await fetch(REQUEST_URL);
  const cards = await result.json();

  try {
    cards.forEach((card) => {
      createNode({
        id: card.id,
        name: card.name,
        url: card.url,
        labels: card.labels.map((label) => ({
          id: label.id,
          name: label.name,
        })),
        internal: {
          type: 'TrelloCard',
          contentDigest: createContentDigest(card),
        },
      });
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

exports.createPages = require('./gatsby/create-pages');
exports.onCreateNode = require('./gatsby/on-create-node');
