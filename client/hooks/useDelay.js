import { useEffect, useState } from 'react'

export function useDelay (delay = 1) {
  const [isDelayed, setIsDelayed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayed(true)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [delay])

  return { isDelayed }
}
