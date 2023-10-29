import './App.css';
import Company from './components/Company/Company';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { UserProvider } from './contexts/UserContext';
import { Routes, Route } from 'react-router-dom';
import ClientHomePage from'./components/Client/ClientHomePage';
import ClientProductPage from './components/Client/ClientProductPage';
import EthPayment from'./components/Client/EthPayment'
import CreateProduct from './components/CreateProduct/CreateProduct';
import EditProduct from './components/EditProduct/EditProduct';
import CompanyRoute from './components/CompanyRoute';
import ClientRoute from './components/ClientRoute';

function App() {
  return (
    <div>
      <UserProvider>
        <Routes>
          <Route path='' element={<Register/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>

          <Route element={<CompanyRoute/>} >
            <Route path='/company' element={<Company/>}/>
            <Route path='/company/:companyId/products/add' element={<CreateProduct/>}/>
            <Route path='/company/:companyId/products/:productId' element={<EditProduct/>}/>
          </Route>

          <Route element={<ClientRoute/>}>
          <Route path='/clientHomePage' element={<ClientHomePage/>}/>
          <Route path='/clientHomePage/products/:name' element={<ClientProductPage/>}/>
          <Route path='/clientHomePage/products/:companyName/EthPayment/:comname'element={<EthPayment/>}/>
          <Route path='/clientHomePage/products/:companyName/EthPayment'element={<EthPayment/>}/>
          </Route>
          
        </Routes>
      </UserProvider>
      
    </div>
  );
}

export default App;
