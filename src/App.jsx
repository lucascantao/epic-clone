import './App.css';

import NavigationBar from './NavigationBar'
import StoreHeader from './StoreHeader'
import DiscoverPage from './DiscoverPage/DiscoverPage.jsx'
import FooterPage from './FooterPage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router >
        <NavigationBar />
        <Switch >

          <Route path='/store'>

            <StoreHeader />

            <Route path='/store/'>
              <DiscoverPage />
            </Route>

            <Route path='/store/browse'>
              <p>Browse Games</p>
            </Route>

          </Route>

          <Route path='/news'>
            <p>News</p>
          </Route>

        </Switch>
        <FooterPage />
      </Router>
    </div>
  );
}

export default App;
