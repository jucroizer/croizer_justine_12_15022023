import "../styles/Card.css"

/** Card function
 *
 * retrieve data from Profil or ProfilMock
 *
 * @param {object} count, categorie, icon
 * @returns card info about the user macro count
*/
function Card(props){
    return <div className="sportsee-card">
        <div className="sportsee-card-icon">
            <img src={props.icon} alt={props.categorie}/>
        </div>
        <div className="sportsee-card-desc">
            <h3 className="sportsee-card-h3">{props.count}</h3>
            <p className="sportsee-card-p">{props.categorie}</p>
        </div>
    </div>
}

export default Card