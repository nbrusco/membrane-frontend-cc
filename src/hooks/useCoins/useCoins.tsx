import { useQuery } from "@tanstack/react-query"
import { fetchCryptocurrencies } from "@/services/coins"

export const useCoins = () => {
    const { isLoading, isError, data, refetch } = useQuery({
        queryKey: ['coins'],
        queryFn: fetchCryptocurrencies
    })

    return { isLoading, isError, data, refetch }
}