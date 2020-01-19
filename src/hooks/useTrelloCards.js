import { useStaticQuery, graphql } from 'gatsby';

const useTrelloCards = () => {
  const { allTrelloCard } = useStaticQuery(
    graphql`
      query TrelloCardsQuery {
        allTrelloCard {
          edges {
            node {
              id
              name
              labels {
                name
                id
              }
              url
            }
          }
        }
      }
    `,
  );

  return allTrelloCard;
};

export default useTrelloCards;
