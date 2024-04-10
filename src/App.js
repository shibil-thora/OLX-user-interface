import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Signup from  './Pages/Signup.js'
import { useEffect, useContext } from 'react';
import { AuthContext } from './store/FirebaseContext.js'; 
import { FirebaseContext } from './store/FirebaseContext.js';
import Create from './Pages/Create.js'
import ViewPost from './Pages/ViewPost.js'
import Post from './store/PostContext.js'

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home.js';
import Login from './Pages/Login.js'

function App() {
  const {user, setUser} = useContext(AuthContext)
  const firebase = useContext(FirebaseContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) =>{
      setUser(user)
    })
  })
  return (
    
    <div>
      <Post>
      <Router>
        <Route exact path='/'> 
          <Home />
        </Route>

        <Route path='/signup'> 
          <Signup />
        </Route>

        <Route path='/login'> 
          <Login />
        </Route>

        <Route path='/sell'> 
          <Create/>
        </Route>

        <Route path='/view'> 
          <ViewPost />
        </Route>


      </Router>
    </Post>
    </div>
  );
}

export default App;
