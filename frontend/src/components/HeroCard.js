import * as React from 'react'
//import { Link } from 'react-router-dom'

const HeroCard = ({ text, variant, id, link, to, image, callback }) => {
  return (
    <>
      {/* <Link className={link} to={to}> */}
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
      {/* </Link> */}
    </>
  )
}

export default HeroCard
