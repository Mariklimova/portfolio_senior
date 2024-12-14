import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contacts from './pages/Contacts/Contacts'

export default function App() {

  return <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/contacts' element={<Contacts/>}></Route>
    </Routes>
  </>

}

