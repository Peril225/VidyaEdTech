import './App.css';
import Login from './assets/components/Login.js';
import Home from './assets/components/Home.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dropoutrate from './assets/components/Dropoutrate';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        {/* <Navbar></Navbar> */}
        <Route path="/home" element={<Home />} />
        <Route path="/state" element={<Dropoutrate />} />
        {/* <Search></Search> */}
        {/* <Piechart></Piechart> */}
        <Route path="/" element={<Login />} />
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
