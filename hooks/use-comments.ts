import { Comment } from '@/lib/types'
import { GET_COMMENTS } from '@/graphql/queries';
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_COMMENT, APPROVE_COMMENT } from '@/graphql/mutations';

export function useComments(postId?: string) {
  const { data, loading, error } = useQuery(GET_COMMENTS, {
    variables: { postId },
    skip: !postId,
  });

  return {
    comments: data?.comments as Comment[] || [],
    loading,
    error,
  };
}

export function useCommentMutations() {
  const [createCommentMutation] = useMutation(CREATE_COMMENT);
  const [approveCommentMutation] = useMutation(APPROVE_COMMENT);

  const createComment = async (postId: string, content: string) => {
    const { data } = await createCommentMutation({
      variables: {
        data: { postId, content },
      },
      refetchQueries: [
        { 
          query: GET_COMMENTS, 
          variables: { postId } 
        },
      ],
    });
    return data?.createComment;
  };

  const approveComment = async (id: number, postId?: string) => {
    const { data } = await approveCommentMutation({
      variables: { id },
      refetchQueries: postId
        ? [{ query: GET_COMMENTS, variables: { postId } }]
        : [{ query: GET_COMMENTS }],
    });
    return data?.approveComment;
  };

  return {
    createComment,
    approveComment,
  };
}
