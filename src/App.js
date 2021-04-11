import "./App.css";
import Todos from "./Todos";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import firebase from "firebase";

const sighInWithGoogle = () =>
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

const SignIn = () => (
  <body>
    <nav className="App-header"> TODO APP </nav>
    <main>
      <button className="button-sign" onClick={sighInWithGoogle}>
        Sign In With Google
      </button>
    </main>
    <footer className="footer">
      <div className="footer-div">
        Made With 🤍
        <a href="https://www.instagram.com/ig_deadviz/">Kuldeep Gupta</a>
      </div>
    </footer>
  </body>
);

const App = () => {
  const [user] = useAuthState(auth);

  return user ? <Todos /> : <SignIn />;
};

export default App;
