import * as React from 'react'
import { createPortal } from 'react-dom'

const FooterPortal = ({ children }) => {
  const footer = document.getElementById('footer')
  const el = document.createElement('div')

  React.useEffect(() => {
    footer.appendChild(el)

    return () => {
      footer.removeChild(el)
    }
  }, [el, footer])

  return createPortal(children, el)
}

export default FooterPortal
