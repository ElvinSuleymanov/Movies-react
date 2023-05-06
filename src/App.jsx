import './App.scss';
import { movies } from './data';
import {Source} from './context';
import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
 // COMPONENTS
import Header from './Components/Header'
import {useNavigate} from 'react-router-dom'
import SearchBar from './Components/Searcbar';
import MovieContainer from './Components/MovieContainer';
import Categories from './Components/Categories';
import Section from './Components/Section';
  // HOOKS

import { useEffect, useState } from 'react';
function App() {
  const navigate = useNavigate()
const copy = [...movies]
  const genres = movies.flatMap((movie) => {
    return movie.genres
})
const unitGenres = [...new Set(genres)]
const [currentMovies,setCurrentMovies] = useState(movies)

  const filtering = (array,filter) => {
    return (
      array.filter(movie => {
        if (movie.genres.includes(filter)) {
          return movie
        }
      }) 
    )
  }
  useEffect(() => {
  navigate('/home')
  },[])
    const dataObject = {
      copy,
      currentMovies,
      setCurrentMovies,
      unitGenres,
      filtering
    }

  return (
    <div className="App">
     
    <Source.Provider value={dataObject} >
    <Header></Header>
    <Routes>
      <Route path='/home' element={<Section></Section>}></Route>
      <Route path='/search' element={<SearchBar></SearchBar>}></Route>
      <Route path='/categories' element={<Categories></Categories>}></Route>
      <Route path='/movies' element={<MovieContainer></MovieContainer>}></Route>
    </Routes>
    </Source.Provider>
    </div>
  );
}

export default App;
