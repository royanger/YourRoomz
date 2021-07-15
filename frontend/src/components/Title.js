import * as React from 'react'

const Title = ({ children, type, className }) => {
  const headingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  const safeHeading = type ? type.toLowerCase() : ''
  const Heading = headingLevels.includes(safeHeading) ? safeHeading : 'p'

  return (
    <div className={`heading ${className}`}>
      <Heading>{children}</Heading>
    </div>
  )
}

export default Title
