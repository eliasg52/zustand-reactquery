import api from '../axios/github';
import { useQuery } from '@tanstack/react-query';

const fetchRepos = async () => {
  const res = await api.get('/users/eliasg52/repos');
  const { data } = res;
  return data;
};

export const useFetchRepositories = () => {
  return useQuery(['repos'], fetchRepos);
};
