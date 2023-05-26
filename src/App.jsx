import { MovieMain } from './components/MovieMain'
import {TopCastContainer} from './components/TopCastContainer'
import './App.css'
import { BookingButton } from './components/BookingButton'
import { useEffect, useState } from 'react'

function App() {

  const [Dogs, setDogs] = useState("")
  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/images/search").then((response) => response.json()).then(response => setDogs(response))
  }, [])

  return (
    <div className="App">
      <MovieMain Dogs = {Dogs}/>
      <TopCastContainer/>
      <BookingButton/>
    </div>
  )
}

export default App