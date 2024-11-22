import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Viewal from './components/Viewal';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/viewall' element={<Viewal/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
