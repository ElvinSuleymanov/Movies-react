import { useContext,useRef} from "react"
import { Source } from "../context"

const MovieContainer = () => {
    const {currentMovies} = useContext(Source)
    
    return (
        <div className="movie_container">
            {currentMovies.map((el,i) => {
                return (
                    <div className="movie_card" key={i}>
                        <div className="movie_image"><img src={el.image} alt="" /></div>
                        <div className="movie_name">{el.name}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default MovieContainer