import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import { Navbar } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
        <Navbar/>
      </div>
    </BrowserRouter>
  )
}

export default App
