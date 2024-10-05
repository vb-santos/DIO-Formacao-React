import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import { Home } from './pages/home';
import { Login } from './pages/login';
import { Feed } from './pages/feed';
import Registro from './pages/registro';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/feed" element={<Feed />}/>
        <Route path="/registro" element={<Registro/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
