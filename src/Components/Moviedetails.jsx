import { useContext, useState } from "react"
import { Source } from "../context"
import { useNavigate } from "react-router-dom"
const MovieDetails = () => {
    const rotate = useNavigate()
    const {copy,currentMovie,setCurrentMovie} = useContext(Source)
    
    return (

        <section className="movie_details">
            
            <div className="movie_trailer">
                <iframe className="frame " src={currentMovie.trailer} frameBorder="0" allow="autoplay;" ></iframe>
            </div>
            <div className="related_movies">
               {
                [...copy].filter((mov) => {
                    if (mov.genres.includes(currentMovie.genres[0]) && mov !== currentMovie) {
                        return mov
                    }
                }).map((el,i) => {
                    return (
                        <div className="movie_card" onClick={() => {
                            rotate(`/movies/${el.name}`)
                            setCurrentMovie(el)
                            }} key={i}>
                            <div className="movie_image"><img src={el.image} alt="" /></div>
                            <div className="movie_name">{el.name}</div>
                        </div>
                    )
                })
               }
            </div>
        </section>
    )
}

export default MovieDetails