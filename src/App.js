import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Paginatio from './Component/Paginatio';
import Details from './Component/Details';
import Cart from './Component/Cart';

function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
          <Route path="/" element={<Paginatio/>}/>
          <Route path="/path" element={<Details/>}>
            <Route path=":id" element={<Details/>}/>
          </Route>
          <Route path="/cart" element={<Cart />}/>
</Routes>
</Router>

   </div>
  );
}

export default App;
