import { gql } from '@apollo/client';

export const REGISTER = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      user {
        id
        email
        name
      }
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      user {
        id
        email
        name
      }
      token
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePost($data: CreatePostInput!) {
    createPost(data: $data) {
      id
      title
      content
      category
      published
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UpdatePost($id: String!, $data: UpdatePostInput!) {
    updatePost(id: $id, data: $data) {
      id
      title
      content
      category
      published
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: String!) {
    deletePost(id: $id)
  }
`;

export const CREATE_COMMENT = gql`
  mutation CreateComment($data: CreateCommentInput!) {
    createComment(data: $data) {
      id
      content
      approved
      author {
        id
        name
      }
    }
  }
`;

export const APPROVE_COMMENT = gql`
  mutation ApproveComment($id: Float!) {
    approveComment(id: $id) {
      id
      content
      approved
    }
  }
`;