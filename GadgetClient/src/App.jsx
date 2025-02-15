
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './Page/Navber/Navber'
import Footer from './ExtraComponents/Footer'

function App() {


  return (
    <>
      <div className=''>
        <Navber/>
        <Outlet/>
        <Footer/>
      </div>

    </>
  )
}

export default App
