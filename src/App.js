import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import List from './pages/List/List';
import Login from './pages/Login/Login';
import New from './pages/New/New';
import Single from './pages/Single/Single';

function App() {
 return(
   <>
    <Routes>
      <Route path='/'>
         <Route index element={<Home/>}/>
         <Route path='login' element={<Login/>}/>
      </Route>
      <Route path='users'>
          <Route index element={<List/>}/>
          <Route path='single' element={<Single/>}/>
          <Route path='new' element={<New/>}/>
      </Route>
      <Route path='products'>
          <Route index element={<List/>}/>
          <Route path=':productId' element={<Single/>}/>
          <Route path='new' element={<New/>}/>
      </Route>

      
      
      
    </Routes>
   </>
 )
}

export default App;
