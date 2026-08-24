import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Localisation from './pages/localisation'

const App = () => {
  const [page, setPage] = useState('accueil')

  return (
    <div>
      <Navbar onNavigate={setPage} />
      {page === 'accueil' && <Home />}
      {page === 'localisation' && <Localisation />}
    </div>
  )
}

export default App