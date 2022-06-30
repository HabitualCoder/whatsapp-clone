import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login';
import { useStateValue } from './stateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">

      {!user ? (
        <Login />
      ) : (
          <div className="app__body">
            <Router>
              <Switch>

                <Route path="/rooms/:roomId">
                  <Sidebar />
                  <Chat />
                </Route>
                <Route path="/">
                  <Sidebar />
                  <Chat />
                </Route>
              </Switch>
            </Router>

          </div>
        )}
    </div>
  );
}

export default App;
