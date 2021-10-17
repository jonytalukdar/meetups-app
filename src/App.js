import { Switch, Route } from 'react-router';
import Layout from './components/layout/Layout';

import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={AllMeetups} />
        <Route path="/newMeetup" component={NewMeetup} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </Layout>
  );
}

export default App;
