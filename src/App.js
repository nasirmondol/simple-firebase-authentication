import './App.css';
import app from './firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

function App() {
  const [user, setUser] = useState({});
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.error('error', error)
      })
  }

  const handleGithubSignIn = () =>{
    signInWithPopup(auth, googleProvider)
    .then(result =>{
      const user = result.user;
      setUser(user)
      console.log(user)
    })
    .catch(error =>{
      console.error(error)
    })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch(error => {
        setUser({})
      })
  }
  return (
    <div className="App">
      {
        user.email ?
          <button onClick={handleSignOut}>Sign Out</button> :
          <div>
            <button onClick={handleGoogleSignIn}>Google sign In</button>
            <button onClick={handleGithubSignIn}>Github sign In</button>
          </div>
      }
      <h4>Name: {user.displayName}</h4>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
