import './App.css'
import Home from './Components/Home'
import { HashRouter, Routes, Route } from 'react-router-dom'
import About from './Components/About'
import Question from './Components/Question'

function App() {
  
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<About />} />
          <Route path='/Question' element={<Question/>} />     
         </Routes>
      </HashRouter>
    
    </div>
  )
}

export default App
