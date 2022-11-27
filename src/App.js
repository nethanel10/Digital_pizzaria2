import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path='/' >Homepage</Route>
        <Route path='/catalog'>Catalog</Route>
        <Route path='/Mycart'>Mycart</Route>
        <Route path='/myorders'>My orders</Route>
        <Route path='/stores'>store</Route>

      </Routes>


    </div>
  );
}

export default App;
