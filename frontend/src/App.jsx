import Header from './Components/Header'
import './App.css'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
function App() {


  return (
    <main>
     <Header/>
 <Outlet/>
     <Footer/>
    </main>
  )
}

export default App
