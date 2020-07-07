import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage.js';
import Shop from './pages/shop.js';
import Header from './components/header.js';
import LogInAndSignUp from './pages/logInAndSignUp.js';
import { auth, createUserProfileDocument  } from './firebase/firebase.utils.js';



const MealsPage = () => (
  <div>
    <h1>MEALS PAGE </h1>
  </div>
);

class App extends React.Component {

  state = { currentUser: null };

  unsubscribeFirebaseAuthStateChange = null;

  componentDidMount() {
    this.unsubscribeFirebaseAuthStateChange = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snap => {
          this.setState({
            currentUser: {
              id: snap.id,
              ...snap.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFirebaseAuthStateChange();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />

        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={Shop} />
          <Route path='/meals' component={MealsPage} />
          <Route path='/login' component={LogInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
