
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './Pages/Home/Home';
import Basket from './Pages/Basket/Basket';
import WishList from './Pages/WishList/WishList';
import Admin from './Pages/Admin/Admin';
import Add from './Pages/Add/Add';
import MainProvider from './context/MainProvider';
import Detail from './Pages/Detail/Detail';

function App() {
  
  return (
    <>
    <MainProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="WishList" element={<WishList />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Add" element={<Add />} />
          <Route path="Detail/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </>
  )
}

export default App
