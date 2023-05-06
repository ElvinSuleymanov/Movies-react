import { useRef, useState } from "react"
import { useContext } from "react"
import { Source } from "../context"
const SearchBar = () => {
    const {copy} = useContext(Source)
    const inputRef = useRef()
    const [state,setState] = useState([])
    return (
        <>
        <form onSubmit={(e) => {
            e.preventDefault()

             const arr = copy.filter(movie => {
                if (movie.name.toLowerCase().includes(inputRef.current.value.toLowerCase())) {
                    return movie
                }
            })
            setState(arr)
        }} className="search_bar">
            <input ref={inputRef} type="text" placeholder="Enter a Movie name..." />
        </form>
        <div className="searched_movies">
            {state && state.map((el,i) => {
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
export default SearchBar