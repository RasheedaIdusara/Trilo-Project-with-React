import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Hotelview from './components/Hotelview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>

      <header className='header'>
        <Header/>
      </header>
      <div className='content'>

        <nav className='sidebar'>
          <Navigation/>
        </nav>

        <main className='hotel-view'>
          <Hotelview/>
        </main>

      </div>

    </div>
  )
}

export default App
