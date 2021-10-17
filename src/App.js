import { Switch, Route } from 'react-router';
import AllMeetups from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
function App() {
  return (
    <Switch>
      <Route exact path="/" component={AllMeetups} />
      <Route path="/newMeetup" component={NewMeetup} />
      <Route path="/favorites" component={Favorites} />
    </Switch>
  );
}

export default App;
