import './App.css';
import Header from './components/header/header.jsx'

import Home from './components/home/home.jsx'
import Planets from './components/planets/planets.jsx'
import Iod from './components/imageOfDay/iod.jsx'
import {
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
function App() {
  return (
    <HashRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/image-of-day" element={<Iod/>}/>
          <Route path="/planets" element={<Planets/>}/>
        </Routes>
    </HashRouter>
    
  );
}

export default App;
