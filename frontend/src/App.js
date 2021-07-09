import * as React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { useAuth } from './lib/context/authContext'
import Loader from 'react-ts-loaders'

// import the screens
import AddRoom from './screens/AddRoom'
import AddRoomDetails from './screens/AddRoomDetails'
import AddFurnitureList from './screens/AddFurnitureList'
import AddFurnitureDetails from './screens/AddFurnitureDetails'
import AddFurnitureComparison from './screens/AddFurnitureComparison'
import CategoryRecommendations from './screens/CategoryRecommendations'
import Login from './screens/Login'
import Landing from './screens/Landing'
import Recommendations from './screens/Recommendations'
import Profile from './screens/Profile'
import LoadingRecs from './screens/LoadingRecs'
import Cart from './screens/Cart'

// import components
import RouteController from './components/routes/RouteController'

const App = () => {
  const { loading } = useAuth()

  if (loading)
    return (
      <div className="loader-container">
        <Loader type="ellipsis" size={200} color="var(--brand-accent)" />
      </div>
    )

  return (
    <>
      <Router>
        <Switch>
          <RouteController
            routeType={'public'}
            path="/"
            exact
            component={Landing}
          />
          <RouteController
            routeType={'auth'}
            path={'/login'}
            exact
            component={Login}
          />
          <RouteController
            routeType={'private'}
            path={'/profile'}
            exact
            component={Profile}
          />
          <RouteController
            routeType={'private'}
            path={'/add-room'}
            exact
            component={AddRoom}
          />
          <RouteController
            routeType={'private'}
            path={'/add-room-details'}
            exact
            component={AddRoomDetails}
          />
          <RouteController
            routeType={'private'}
            path={'/add-furniture-list'}
            exact
            component={AddFurnitureList}
          />
          <RouteController
            routeType={'private'}
            path={'/add-furniture-details'}
            exact
            component={AddFurnitureDetails}
          />
          <RouteController
            routeType={'private'}
            path={'/add-furniture-comparison'}
            exact
            component={AddFurnitureComparison}
          />
          <RouteController
            routeType={'private'}
            path={'/category-recommendations'}
            exact
            component={CategoryRecommendations}
          />
          <RouteController
            routeType={'private'}
            path={'/recommendations'}
            exact
            component={Recommendations}
          />
          <RouteController
            routeType={'private'}
            path={'/cart'}
            exact
            component={Cart}
          />
          <RouteController
            routeType={'private'}
            path={'/loading'}
            exact
            component={LoadingRecs}
          />
        </Switch>
      </Router>
    </>
  )
}

export default App
