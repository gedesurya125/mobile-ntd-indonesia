import { gql } from '@apollo/client';

// const MIN_CATEGORY_FIELDS = gql`
//   fragment minCategoryFields on Category {
//     id
//     categoryId
//     name
//     slug
//     count
//   }
// `;

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
export const GET_CATEGORIES_REGULAR = `#graphql
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
