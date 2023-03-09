import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homelay from './pages/homelay';
import Detail from './pages/detail';
import Home from './pages/home';
function App() {
  return (
    <Routes>
      <Route element={<Homelay/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
      <Route path='/:id' element={<Detail/>}/>x
    </Routes>
  )
}

export default App;
