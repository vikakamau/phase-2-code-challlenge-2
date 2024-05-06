import { useParams } from "react-router-dom";
import { getBotById } from "../fetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Card() {
    const params = useParams();
    const [bot, setBot] = useState({});
    const [error, setError] = useState(null);
 
    useEffect(()=>{
      getBotById(params.id)
      .then(data => setBot(data))
      .catch(error => setError(error))
    }, [params.id, error, bot])

    return (
        <div className="bg-secondary">
            <div key={bot.id} className="col-sm-3 mb-4">
                <div className="card bg-light">
                    
                        <img src={bot.avatar_url} className="card-img-top" alt="Avatar"/>
                    
                    <div className="card-body">
                        <h5 className="card-title">Name: {bot.name}</h5>
                        <h5 className="card-text">bot_class: {bot.bot_class}</h5>
                        <p className="card-text"><span className="icon health-icon">❤️</span>health: {bot.health}</p>
                        <p className="card-text"><span className="icon damage-icon">💥</span>damage: {bot.damage}</p>
                        <p className="card-text"><span className="icon armor-icon">🛡️</span>armor: {bot.armor}</p>
                        <p className="card-text">catchphrase: {bot.catchphrase}</p>
                        <p className="card-text">Created At: {bot.created_at}</p>
                        <p className="card-text">Updated At: {bot.updated_at}</p>  
                        <Link to="/phase-2-code-challlenge-2">
                        <button className="btn btn-danger btn-sm m-3">Go Back</button>
                        </Link>
                         
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Card;
