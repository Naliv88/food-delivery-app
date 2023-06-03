import {  Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import { Shop } from 'page/Shop/Shop';
import { ShoppingCart } from 'page/ShoppingCart/ShoppingCart';
import { History } from 'page/History/History';
import  Coupons  from 'page/Coupons/Coupons';

function App() {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Shop/>} />
          <Route path="shoppingCart" element={<ShoppingCart/>} />
          <Route path="history" element={<History/>} />
          <Route path="coupons" element={<Coupons/>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
  );
}

export default App;
