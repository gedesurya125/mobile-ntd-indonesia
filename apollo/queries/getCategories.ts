import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query getCategoriesWithMinPosts($first: Int) {
    categories(first: $first) {
      nodes {
        id
        categoryId
        name
        slug
        count
      }
    }
  }
`;

export type categoryItem = {
  id: string;
  categoryId: string;
  name: string;
  slug: string;
  count: number;
};
