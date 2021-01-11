import './App.css';

import NavigationBar from './NavigationBar'
import StoreHeader from './StoreHeader'
import DiscoverPage from './DiscoverPage/DiscoverPage.jsx'
import FooterPage from './FooterPage'
import HomePage from './HomePage/HomePage'
import BrowsePage from './BrowsePage/BrowsePage'
import NewsPage from './NewsPage/NewsPage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router >
        <NavigationBar />
        <Switch >
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/store'>

            <StoreHeader />

            <Route exact path='/store/'>
              <DiscoverPage />
            </Route>

            <Route path='/store/browse'>
              <BrowsePage />
            </Route>

          </Route>

          <Route path='/news'>
            <NewsPage />
          </Route>

        </Switch>
        <FooterPage />
      </Router>
    </div>
  );
}

export default App;
