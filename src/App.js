import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './screens/Home';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="signin" element={ <SignIn/> } />
        <Route path="signup" element={ <SignUp/> } />
      </Routes>
    </div>
  );
}

export default App;
