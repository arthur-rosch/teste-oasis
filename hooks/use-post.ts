import { useQuery, useMutation } from '@apollo/client';
import type { Category, Post } from '@/lib/types';
import { CREATE_POST, UPDATE_POST, DELETE_POST } from '@/graphql/mutations';
import { GET_POSTS, GET_POSTS_BY_CATEGORY, GET_POST, SEARCH_POST } from '@/graphql/queries';

export function usePosts() {
  const { data, loading, error } = useQuery(GET_POSTS);

  return {
    posts: data?.posts || [],
    loading,
    error,
  };
}

export function usePostByCategory(category: Category) {
  const { data, loading, error } = useQuery(GET_POSTS_BY_CATEGORY, {
    variables: { category },
  });

  return {
    posts: data?.postsByCategory as Post[] || [],
    loading,
    error,
  };
}

export function useSinglePost(id: string) {
  const { data, loading, error } = useQuery(GET_POST, {
    variables: { id },
  });

  return {
    post: data?.post || null,
    loading,
    error,
  };
}

export function usePostMutations() {
  const [createPostMutation] = useMutation(CREATE_POST);
  const [updatePostMutation] = useMutation(UPDATE_POST);
  const [deletePostMutation] = useMutation(DELETE_POST);

  const createPost = async (title: string, content: string, category: Category) => {
    const { data } = await createPostMutation({
      variables: {
        data: { title, content, category },
      },
      refetchQueries: [{ query: GET_POSTS }],
    });
    return data?.createPost;
  };

  const updatePost = async (id: string, updateData: Record<string, any>) => {
    const { data } = await updatePostMutation({
      variables: { id, data: updateData },
      refetchQueries: [{ query: GET_POSTS }],
    });
    return data?.updatePost;
  };

  const deletePost = async (id: string) => {
    const { data } = await deletePostMutation({
      variables: { id },
      refetchQueries: [{ query: GET_POSTS }],
    });
    return data?.deletePost;
  };

  

  return {
    createPost,
    updatePost,
    deletePost,
  };
}

export function useSearchPosts(title: string, category?: Category) {
  const { data, loading, error } = useQuery(SEARCH_POST, {
    variables: { data: { title, category } },
    skip: !title && !category,
  });

  return {
    posts: data?.searchPosts as Post[] || [],
    loading,
    error,
  };
}
