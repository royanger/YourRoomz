import * as React from 'react'

const HeroCard = ({ text, variant, id, image, callback }) => {
  return (
    <>
      <div
        onClick={callback}
        className={variant}
        id={id}
        style={{
          backgroundImage: `url(/images/rooms/${image})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="name">{text}</div>
      </div>
    </>
  )
}

export default HeroCard
