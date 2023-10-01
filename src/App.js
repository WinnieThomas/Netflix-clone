import React from 'react';
import HomeScreen from './HomeScreen';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './LoginScreen';
import {auth} from './firebase';
import { useEffect } from 'react';
import {useDispatch,useSelector} from "react-redux";
import {logout,login, selectUser} from "./features/userSlice";
import ProfileScreen from './ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }));
      }
      else{
         dispatch(logout());
      }
    });
    return unsubscribe;
  },[dispatch]);

  return (
    <div className="app">
    <Router>
      {!user ? (
        <LoginScreen/>
      ) : (
        <Routes>
          <Route path="/"
          element={<HomeScreen/>}>
          </Route>
          <Route path="/profile"
          element={<ProfileScreen/>}></Route>
          </Routes>
        )
}
    </Router>
    </div>
  );
}

export default App;
