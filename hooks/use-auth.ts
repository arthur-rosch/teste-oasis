import { useMutation, useQuery } from '@apollo/client';
import { REGISTER, LOGIN } from '@/graphql/mutations';
import { GET_PROFILE } from '@/graphql/queries';


export function useAuth() {
  const { data, loading, error } = useQuery(GET_PROFILE);

  return {
    user: data?.me || null,
    loading,
    error,
  };
}

export function useAuthMutations() {
  const [registerMutation] = useMutation(REGISTER);
  const [loginMutation] = useMutation(LOGIN);

  const register = async (email: string, password: string, name: string) => {
    const { data } = await registerMutation({
      variables: { data: { email, password, name } },
    });

    const token = data?.register?.token;
    if (token) {
      localStorage.setItem('token', token);
    }

    return data?.register;
  };

  const login = async (email: string, password: string) => {
    const { data } = await loginMutation({
      variables: { data: { email, password } },
    });

    const token = data?.login?.token;
    if (token) {
      localStorage.setItem('token', token);
    }

    return data?.login;
  };

  return {
    register,
    login,
  };
}
