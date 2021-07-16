import * as React from 'react'
import InfoIcon from './icons/InfoIcon'

const Info = ({ children, variant }) => {
  return (
    <div className={`info ${variant}`}>
      <InfoIcon />
      <div className="info-content">{children}</div>
    </div>
  )
}

export default Info
