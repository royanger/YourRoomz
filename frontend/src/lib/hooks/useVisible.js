import * as React from 'react'

function useVisible(initialIsVisible) {
  const [isVisible, setIsVisible] = React.useState(initialIsVisible)
  const ref = React.useRef(null)

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false)
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return { ref, isVisible, setIsVisible }
}

export default useVisible
