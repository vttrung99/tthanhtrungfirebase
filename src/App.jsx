import './App.scss'
import LazyLoad from './LazyLoad';
import { Routes, Route } from 'react-router-dom';
import About from './pages/Homes/About/About';
import Navbar from './components/Loadings/navbar/Navbar';
function App() {
  return (
    <div className="App">
      <div className='app-container'>
        <Navbar></Navbar>
        <About></About>
        <Routes>
        <Route path="" element={LazyLoad(() => import("@pages/Homes/Home"))()} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
