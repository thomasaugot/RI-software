import { useEffect, useState } from 'react'
export const useInfiniteScroll = (blockHeigh: number, currentUserHeight: number, numberOfItems: number, itemsIncrement: number): { count: number, loading: boolean } => {
  const [loading, setLoading] = useState(false)
  const [count, setCount] = useState(itemsIncrement)
  if (Math.abs(currentUserHeight) > blockHeigh - 800 && !loading && currentUserHeight !== 0) {
    setLoading(true)
  }

  useEffect(() => {
    if (loading) {
      if (count + itemsIncrement >= numberOfItems) {
        setCount(numberOfItems)
      } else {
        setCount(count + itemsIncrement)
      }
      setLoading(false)
    }
  }, [count, loading])

  return { count, loading }
}
