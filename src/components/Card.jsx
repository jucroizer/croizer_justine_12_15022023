import "../styles/Card.css"

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