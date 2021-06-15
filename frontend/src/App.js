import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useAuth } from './lib/context/authContext'
import Loader from 'react-ts-loaders'
import { history } from './lib/history'

// import the screens
import AddCurrentItems from './screens/AddCurrentItems'
import AddRoom from './screens/AddRoom'
import CategoryRecommendations from './screens/CategoryRecommendations'
import CurrentItemsDetails from './screens/CurrentItemsDetails'
import Login from './screens/Login'
import Recommendations from './screens/Recommendations'
import RoomDetails from './screens/RoomDetails'
import RoomSpecs from './screens/RoomSpecs'
import Profile from './screens/Profile'
import LoadingRecs from './screens/LoadingRecs'
import Cart from './screens/Cart'

// import basic components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const App = () => {
  const {
    loading,
    authInfo: { isAuthenticated },
  } = useAuth()

  if (loading) return <Loader />
  if (!loading && !isAuthenticated) history.push('/login')

  return (
    <>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route>
            <Header />
            <main className="wrapper">
              <Switch>
                <Route path="/" exact component={Profile} />
                <Route path="/add-room" exact component={AddRoom} />
                <Route path="/add-items" exact component={AddCurrentItems} />
                <Route
                  path="/category-recommendations"
                  exact
                  component={CategoryRecommendations}
                />
                <Route
                  path="/add-details"
                  exact
                  component={CurrentItemsDetails}
                />
                <Route
                  path="/recommendations"
                  exact
                  component={Recommendations}
                />
                <Route path="/room-details" exact component={RoomDetails} />
                <Route path="/room-specs" exact component={RoomSpecs} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/loading" exact component={LoadingRecs} />
              </Switch>
            </main>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App
