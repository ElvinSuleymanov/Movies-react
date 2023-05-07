import { Source } from "../context"
import { useContext, useState } from "react"
import {Link,BrowserRouter} from 'react-router-dom'
import {RxHamburgerMenu} from 'react-icons/rx'
import { act } from "react-dom/test-utils"
const Header = () => {
const data = useContext(Source)
const [active,SetActive] = useState(false)
const toggleBurgerMenu = () => {

}
    return (


        <header>
            <div className="logo">Movies</div>
            <ul className={`nav ${active ? `active` : ``}`}>
                <li className="nav_item"><Link to="/home" >About</Link></li>
                <li className="nav_item"><Link to="/categories">Categories</Link></li>
                <li className="nav_item"><Link to="/search">Search</Link></li>
                <li className="nav_item"><Link to="/movies">Movies</Link></li>
            </ul>
                <li className="burger_menu" onClick={() => {
                   if (active) {
                    SetActive(false)
                   }
                   else {
                    SetActive(true)
                   }
                }}><RxHamburgerMenu/></li>
        </header>
    )
}
export default Header