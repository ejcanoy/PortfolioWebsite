import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Resume from './components/Resume'

function App() {
  return (

    <div className="container">
      <header className="">
      <Resume />
      </header>
    </div>
  );
}

export default App;
