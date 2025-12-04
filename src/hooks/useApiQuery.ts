import {
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query';

type ApiQueryParams<TData, TError = unknown> = {
  queryKey: QueryKey;
  queryFn: () => Promise<TData>;
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>;
};

export const useApiQuery = <TData, TError = unknown>({
  queryKey,
  queryFn,
  options,
}: ApiQueryParams<TData, TError>): UseQueryResult<TData, TError> =>
  useQuery({
    queryKey,
    queryFn,
    ...options,
  });

