import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import NotFound from './pages/not-found'


function App() {
  

  return (
    <>
      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
