
import { Outlet } from 'react-router-dom'
import './App.css'
import Navber from './Page/Navber/Navber'

function App() {
 

  return (
    <>
      <div className=''>
        <Navber/>
      <Outlet/>
      </div>
     
    </>
  )
}

export default App
