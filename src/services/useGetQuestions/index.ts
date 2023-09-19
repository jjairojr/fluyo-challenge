import { useQuery } from 'react-query'
import { getQuestions } from './api'
import { IGetQuestions } from './api/types'

export function useGetQuestions() {
  return useQuery<IGetQuestions[], Error>(
    ['get-questions'],
    () => getQuestions(),
    {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  )
}
