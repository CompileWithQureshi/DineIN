
import './App.css'
import Login from './pages/Login'
import SingUp from './pages/SignUp'
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signUp' element={<SingUp/>}/>
      </Routes>
    </Router>
   
    </>
  )
}

export default App
