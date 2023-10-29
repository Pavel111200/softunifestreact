import './App.css';
import Company from './components/Company/Company';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { UserProvider } from './contexts/UserContext';
import { Routes, Route } from 'react-router-dom';
import ClientHomePage from'./components/Client/ClientHomePage';
import ClientProductPage from './components/Client/ClientProductPage';
import EthPayment from'./components/Client/EthPayment'
function App() {
  return (
    <div>
      <UserProvider>
        <Routes>
          <Route path='' element={<Register/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/clientHomePage' element={<ClientHomePage/>}/>
          <Route path='/clientHomePage/products/:name' element={<ClientProductPage/>}/>
          <Route path='/clientHomePage/products/SoftUni/EthPayment/:comname'element={<EthPayment/>}/>
          
          
        </Routes>
      </UserProvider>
      
    </div>
  );
}

export default App;
