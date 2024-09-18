
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import Contacts from './pages/Contact'


//import Contact from './pages/Contact'
function App() {


  return (
    <>
      <BrowserRouter>
            <Routes>
                 <Route path="/" element={<Profile/>} />
                 <Route path="/Projects" element={<Projects/>} />
                 <Route path="/Contact" element={<Contacts/>} /> 
            </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
