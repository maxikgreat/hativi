import useSWR from 'swr';

import { axiosAuth0 as axios } from '@/services/axios';
import { User } from '@/store/user/types';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export const useUser = () => {
  const { data, error } = useSWR<User>('/api/v1/me', fetcher);

  return {
    user: data,
    loading: !data && !error,
    error,
  }
}