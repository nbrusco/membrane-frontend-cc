import { useQuery } from '@tanstack/react-query'
import { fetchCryptocurrencies } from '@/services/coins'

import { ICoin } from '@/interfaces/ICoin'

export const useCoins = () => {
  const { isLoading, isError, data, refetch } = useQuery<ICoin[]>({
    queryKey: ['coins'],
    queryFn: fetchCryptocurrencies,
    staleTime: 0,
  })

  return { isLoading, isError, data, refetch }
}