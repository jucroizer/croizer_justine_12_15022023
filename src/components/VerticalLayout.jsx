import zen from "../assets/verticalLayoutAssets/zen.svg"
import swim from "../assets/verticalLayoutAssets/swim.svg"
import bike from "../assets/verticalLayoutAssets/bike.svg"
import alters from "../assets/verticalLayoutAssets/alters.svg"

import "../styles/VerticalLayout.css"

function VerticalLayout(){
    return <article className="sportsee-vertical-layout">
        <nav className="sportsee-vertical-layout-nav">
            <ul className="sportsee-vertical-layout-ul">
                <li className="sportsee-vertical-layout-li"><img className="sportsee-vertical-layout-icon" src={ zen } alt="icone zen" /></li>
                <li className="sportsee-vertical-layout-li"><img className="sportsee-vertical-layout-icon" src={ swim } alt="icone swim" /></li>
                <li className="sportsee-vertical-layout-li"><img className="sportsee-vertical-layout-icon" src={ bike } alt="icone bike" /></li>
                <li className="sportsee-vertical-layout-li"><img className="sportsee-vertical-layout-icon" src={ alters } alt="icone alters" /></li>
            </ul>
        </nav>
        <p className="sportsee-vertical-layout-copyright">Copyright SportSee 2020</p>
    </article>
}

export default VerticalLayout