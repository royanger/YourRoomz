import * as React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ className, modalStatus, children }) => {
  const modal = document.getElementById('modal')
  const el = document.createElement('div')
  const status = modalStatus ? 'show' : 'hidden'
  console.log('modalstatus', status)
  el.classList.add(className)
  modal.className = status
  //   modal.classList.add(status)

  React.useEffect(() => {
    modal.appendChild(el)

    return () => {
      modal.removeChild(el)
    }
  }, [el, modal])

  return createPortal(children, el)
}

export default Modal
