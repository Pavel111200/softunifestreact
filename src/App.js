import './App.css';
import Company from './components/Company/Company';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { UserProvider } from './contexts/UserContext';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <UserProvider>
        <Routes>
          <Route path='' element={<Register/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/company' element={<Company/>}/>
        </Routes>
      </UserProvider>
      
    </div>
  );
}

export default App;
