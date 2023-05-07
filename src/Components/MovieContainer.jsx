import { useContext,useRef} from "react"
import { Source } from "../context"
import { useNavigate } from "react-router-dom"
const MovieContainer = () => {
    const {currentMovies,setCurrentMovie} = useContext(Source)
    const rotate = useNavigate()
    return (
        <div className="movie_container">
            {currentMovies.map((el,i) => {
                return (
                    <div className="movie_card" onClick={() => {
                        rotate(`/movies/${el.name}`)
                        setCurrentMovie(el)
                        }} key={i}>
                        <div className="movie_image"><img src={el.image} alt="" /></div>
                        <div className="movie_name">{el.name}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default MovieContainer