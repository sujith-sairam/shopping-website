
import { Routes,Route } from 'react-router-dom';
import Authentication from './components/routes/Authentication/authentication';
import Home from "./components/routes/home/home";
import NavigationBar from './components/routes/navigation/navigation';

function Shop(){
  return <h1>I am the Shop</h1>

  
};


function App(){
  return(
    <Routes>
      <Route path="/" element={< NavigationBar />}>
      <Route index element={ <Home />} />
      <Route path="shop" element={<Shop/>} />
      <Route path="auth" element={<Authentication/>} />   
      </Route>
    </Routes>
  );
}

export default App;