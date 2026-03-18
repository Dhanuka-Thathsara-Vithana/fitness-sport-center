import { useEffect, useRef, useState, RefObject } from 'react'

const useIntersection = (threshold = 0.12): [RefObject<HTMLElement>, boolean] => {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

export default useIntersection
