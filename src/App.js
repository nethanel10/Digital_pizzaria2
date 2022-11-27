import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Homepage from './Pages/Homepage';
import Ourcatalog from './Pages/Ourcatalog';
import Mycart from './Pages/Mycart';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Homepage/>}>Homepage</Route>
        <Route path='/catalog' element={<Ourcatalog/>}>Catalog</Route>
        <Route path='/Mycart' element={<Mycart/>}>Mycart </Route>
        <Route path='/myorders'>My orders</Route>
        <Route path='/stores'>store</Route>

      </Routes>


    </div>
  );
}

export default App;
