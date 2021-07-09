import * as React from 'react'
import FooterPortal from '../portals/Footer'
import { useHistory } from 'react-router-dom'
import Button from '../Button'
import ChevronLeftIcon from '../icons/ChevronLeftIcon'
import ChevronRightIcon from '../icons/ChevronRightIcon'

const Footer = ({
  nextDisabled,
  backDisabled,
  callback,
  backVariant,
  nextVariant,
  prev,
  furnitureList,
  recommendations,
}) => {
  const history = useHistory()

  const handleBack = el => {
    history.push(prev)
  }

  const handleAddFurniture = () => {
    history.push('/add-furniture-details')
  }

  const handleSkipRecommendations = () => {
    console.log('clicked')
    history.push('/recommendations')
  }

  return (
    <FooterPortal>
      <footer>
        <div
          className={`container ${
            furnitureList || recommendations ? 'threecol' : 'twocol'
          }`}
        >
          <nav>
            <ul>
              <li>
                <Button
                  id="footerBack"
                  variant={`small footer left light ${backVariant}`}
                  disabled={backDisabled}
                  callback={handleBack}
                  onClick={handleBack}
                >
                  <ChevronLeftIcon /> Back
                </Button>
              </li>
              {furnitureList ? (
                <li>
                  <Button
                    id="footerAlt"
                    text="Add another furniture item"
                    variant="small light line"
                    callback={handleAddFurniture}
                  />
                </li>
              ) : (
                ''
              )}
              {recommendations ? (
                <li>
                  <Button
                    id="footerAlt"
                    text="Use our recommendations"
                    variant="small light line"
                    callback={handleSkipRecommendations}
                  />
                </li>
              ) : (
                ''
              )}
              <li className="right">
                <Button
                  id="footerNext"
                  variant={`small footer right ${nextVariant}`}
                  disabled={nextDisabled}
                  callback={callback}
                >
                  Next <ChevronRightIcon />
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </FooterPortal>
  )
}

export default Footer
