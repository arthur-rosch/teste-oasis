import { gql } from '@apollo/client';

export const GET_POSTS = gql`
  query GetPosts($data: PaginationInput) {
    posts(data: $data) {
      id
      title
      content
      category
      published
      author {
        id
        name
      }
      createdAt
    }
  }
`;

export const GET_POSTS_BY_CATEGORY = gql`
  query GetPostsByCategory($category: Category!) {
    postsByCategory(category: $category) {
      id
      title
      content
      category
      authorId
      createdAt

      author {
        id
        name
      }
    }
  }
`;

export const GET_POST = gql`
  query GetPost($id: String!) {
    post(id: $id) {
      id
      title
      content
      category
      published
      author {
        id
        name
      }
      comments {
        id
        content
        approved
        author {
          id
          name
        }
      }
      createdAt
    }
  }
`;

export const GET_COMMENTS = gql`
  query GetComments($postId: String!) {
    comments(postId: $postId) {
      id
      content
      approved
      author {
        id
        name
      }
      createdAt
    }
  }
`;

export const GET_PROFILE = gql`
  query Me {
    me {
      id
      email
      name
      posts {
        id
        title
        category
      }
      comments {
        id
        content
        approved
      }
    }
  }
`;

export const SEARCH_POST = gql`
  query SearchPosts($data: SearchPostInput!) {
    searchPosts(data: $data) {
      id
      title
      content
      category
      authorId
      createdAt
      updatedAt
      author {
        id
        name
        email
      }
    }
  }
`