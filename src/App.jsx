import { MovieMain } from "./components/MovieMain";
import { TopCastContainer } from "./components/TopCastContainer";
import "./App.css";
import { BookingButton } from "./components/BookingButton";
import { useEffect, useState } from "react";
import { getMovies } from "./services/movies";

function App() {
  // const [Dogs, setDogs] = useState("")
  // useEffect(() => {
  //   fetch("https://www.omdbapi.com/?25d50818&i=tt1375666")
  //   .then((response) => response.json())
  //   .then(response => setDogs(response))
  // }, [])

  // return (
  //   <div className="App">
  //     <MovieMain Dogs = {Dogs}/>
  //     <TopCastContainer/>
  //     <BookingButton/>
  //   </div>
  // )
  // const [peli, setPeli] = useState("");
  // useEffect(() => {
  //   fetch("https://www.omdbapi.com/?t=ready+player+one&apikey=1839f975")
  //   .then((response) => response.json())
  //   .then((data) => setPeli(data));
  // }, []);

  const [peli, setPeli] = useState("");
  useEffect(() => {
    getMovies("Inception").then((data) => setPeli(data))
  }, []);

  return (
    <div className="App">
      <MovieMain peli={peli} />

      <TopCastContainer pelis={peli}/>

      <BookingButton />
    </div>
  );
}

export default App;
