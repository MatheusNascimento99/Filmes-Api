import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import NotFound from './pages/not-found'
import Layout from './components/layout'
import Acao from './pages/acao'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='/action' element={<Acao/>}/>

        </Route>
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
