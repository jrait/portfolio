import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router,Link } from '@reach/router'
import Main from './Views/Main.jsx'
import logo1 from './images/josh-logo2.png'
import AboutMe from './Views/AboutMe';

function App() {
  return (
    <div className="App">

      <Router>
        <Main path="/"></Main>
        <AboutMe path = '/about'></AboutMe>
      </Router>

    </div>
  );
}

export default App;
