import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Resume from './components/Resume'
import Header from './components/Header'

function App() {
  return (

    <div className="container">
      <Header></Header>
      <Resume />
    </div>
  );
}

export default App;
