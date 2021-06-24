import * as React from 'react'
import FooterPortal from '../portals/Footer'
import Button from '../Button'

const Footer = ({
  nextDisabled,
  backDisabled,
  callback,
  backVariant,
  nextVariant,
}) => {
  return (
    <FooterPortal>
      <footer>
        <div className="container">
          <nav>
            <ul>
              <li>
                <Button
                  id="footerBack"
                  text="Back"
                  variant={`small light ${backVariant}`}
                  disabled={backDisabled}
                  callback={callback}
                />
              </li>
              <li className="right">
                <Button
                  id="footerNext"
                  text="Next"
                  variant={`small ${nextVariant}`}
                  disabled={nextDisabled}
                  callback={callback}
                />
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </FooterPortal>
  )
}

export default Footer
