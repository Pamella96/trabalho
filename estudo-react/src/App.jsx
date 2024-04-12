import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'

function App() {

  

  return (

    
    <>
    <Navbar/>
    <div>
      
      
        <p>
          Formulario
        </p>
        <form>
          <label>
            Nome:
            <input type="text" name="name" />
          </label>
          <label>
            data de nascimento:
            <input type="date" name="date" />
          </label>
          <label>
            email:
            <input type="email" name="email" />
          </label>

          <label>
            matricula:
            <input type="number" name="number" />
          </label>


          <button type= "submit"> count is:</button>
        </form>
          
    </div>
    </>
  )
  
}



export default App
