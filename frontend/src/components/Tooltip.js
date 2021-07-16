import * as React from 'react'

const Tooltip = ({ children }) => {
  return (
    <div className="tooltip">
      <div className="tooltip-content">{children}</div>
    </div>
  )
}

export default Tooltip
