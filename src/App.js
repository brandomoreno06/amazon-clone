import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from "./Components/Checkout/Checkout";
import Login from './Components/Login/Login';
import { useStateValue } from './Components/StateProvider';
import { useEffect } from 'react';
import { auth } from "./firebase";


function App() {
  const [{basket}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })

    return () => {
      unsubscribe()
    }

  }, [])


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
