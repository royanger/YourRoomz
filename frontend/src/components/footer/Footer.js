import * as React from 'react'
import FooterPortal from '../portals/Footer'
import { useHistory } from 'react-router-dom'
import Button from '../Button'

const Footer = ({
  nextDisabled,
  backDisabled,
  callback,
  backVariant,
  nextVariant,
  prev,
}) => {
  const history = useHistory()

  const handleBack = el => {
    history.push(prev)
  }

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
                  callback={handleBack}
                  onClick={handleBack}
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
