import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Ingreso from './pages/Ingreso'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/ingreso' element={<Ingreso />}/>
        <Route path='*' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
