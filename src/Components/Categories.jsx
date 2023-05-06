import { useContext } from "react"
import { Source } from "../context";

const Categories = () => {
    const {currentMovies,unitGenres,filtering,setCurrentMovies,copy} = useContext(Source)
    console.log(copy);
    // const genres = movies.flatMap((movie) => {
    //     return movie.genres
    // })
    // const unitGenres = [...new Set(genres)]
    return (
        <>
        <div className="categories">
            {unitGenres.map((movieGenre,i) => {
                return (

                    <button onClick={(e) => {
                        e.preventDefault()
                        setCurrentMovies(filtering(copy,movieGenre))
                        
                    }} key={i}>{movieGenre}</button>
                )
            })}
            
        </div>
        <div className="filtered_movies_container">
            {currentMovies.map((el,i) => {
                return (
                    <div className="movie_card" key={i}>
                        <div className="movie_image"><img src={el.image} alt="" /></div>
                        <div className="movie_name">{el.name}</div>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default Categories