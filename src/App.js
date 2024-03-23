
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Promociones from './Pages/Promociones';
import Cart from './Pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar>
      </Navbar>
        <Routes>
          <Route path= '/' element={<Promociones/>}>
         
          </Route>
          <Route path= '/cart' element={<Cart/>}>
          </Route>

        </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
