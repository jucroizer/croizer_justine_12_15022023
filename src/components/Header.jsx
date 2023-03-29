
import logo from "../assets/logo.svg"
import "../styles/Header.css"

/** Header function
 * @returns navbar and logo
*/
function Header(){
    return <header className="sportsee-header">
        <img className="sportsee-header-logo" src={ logo } alt="logo SportSee"/>
        <nav className="sportsee-header-nav">
            <ul className="sportsee-header-ul">
                <li className="sportsee-header-li">Accueil</li>
                <li className="sportsee-header-li">Profil</li>
                <li className="sportsee-header-li">Réglages</li>
                <li className="sportsee-header-li">Communauté</li>
            </ul>
        </nav>
    </header>
}

export default Header