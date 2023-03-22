
import { Routes,Route } from 'react-router-dom';
import Authentication from './components/routes/Authentication/authentication';
import Checkout from './components/routes/checkout/checkout';
import Home from "./components/routes/home/home";
import NavigationBar from './components/routes/navigation/navigation';
import Shop from './components/routes/shop/shop';




function App(){
  return(
    <Routes>
      <Route path="/" element={< NavigationBar />}>
      <Route index element={ <Home />} />
      <Route path="shop/*" element={<Shop/>} />
      <Route path="auth" element={<Authentication/>} /> 
      <Route path="checkout" element={<Checkout/>} />   
      </Route>
    </Routes>
  );
}

export default App;