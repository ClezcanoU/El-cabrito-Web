import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='*' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App