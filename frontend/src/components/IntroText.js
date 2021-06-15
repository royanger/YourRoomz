import * as React from 'react'

const IntroText = ({ variant, heading, paragraph }) => {
  return (
    <>
      <div className={`intro-text ${variant}`}>
        <h1>{heading}</h1>
        <p>{paragraph}</p>
      </div>
    </>
  )
}
export default IntroText
