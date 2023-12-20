import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Main from './pages/Main'
import AddBlog from './pages/AddBlog'
import View from './pages/View'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/addBlog' element={< ><AddBlog/></>} />
          <Route path='/view' element={< ><View/></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
