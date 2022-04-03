import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFould from './components/NotFound/NotFould';
import Order from './components/Order/Order';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Shop from './components/Shop/Shop';
export const MyContext=createContext('default')

const App=()=>{
  return (
    <MyContext.Provider value='Shakil'>
        <div className="App">
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/order' element={<Order/>}/>
            <Route path='/product/'>
              <Route path=':id' element={<ProductDetails/>}/>

            </Route>
            <Route path='*' element={<NotFould/>}/>
          </Routes>
        </div>

    </MyContext.Provider>
    
  );
}

export default App;
