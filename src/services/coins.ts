import axios from '@/utils/axiosAdapter'
import { ICoin } from '@/interfaces/ICoin'

export const fetchCryptocurrencies = async (): Promise<ICoin[]> => {
  try {
    const response = await axios.get<ICoin[]>(
      `/coins/markets?x_cg_demo_api_key=${
        import.meta.env.VITE_REACT_COINGECKO_API_KEY
      }&vs_currency=usd&order=market_cap_desc&per_page=10&page=1`
    )

    if (!response.status) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response.data
  } catch (error) {
    console.error('Error fetching cryptocurrencies data:', error)
    throw error
  }
}
