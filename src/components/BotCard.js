import { useParams } from "react-router-dom";
import { getBotById } from "../fetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Card() {
    const params = useParams();
    const [bot, setBot] = useState({});
    const [error, setError] = useState(null);
    const [enlistedBots, setEnlistedBots] = useState([]);

    useEffect(()=>{
      getBotById(params.id)
      .then(data => setBot(data))
      .catch(error => setError(error))
    }, [params.id, error, bot])

function enlistBot(bot) {
  if (enlistedBots.length < 4 && !enlistedBots.find(b => b.id === bot.id)) {
    setEnlistedBots([...enlistedBots, bot]);
    
  }
}
function removeFromArmy(id) {
  setEnlistedBots(enlistedBots.filter(bot => bot.id !== id));
}


    return (
        <div className="bg-secondary">
          <Navbar army={enlistedBots} removeFromArmy={removeFromArmy} />
            <div key={bot.id} className="col-sm-3 mb-4">
                <div className="card bg-light">
                    
                        <img src={bot.avatar_url} className="card-img-top" alt="Avatar"/>
                    
                    <div className="card-body">
                        <h5 className="card-title">Name: {bot.name}</h5>
                        <h5 className="card-text">bot_class: {bot.bot_class}</h5>
                        <p className="card-text">health: {bot.health}</p>
                        <p className="card-text">damage: {bot.damage}</p>
                        <p className="card-text">armor: {bot.armor}</p>
                        <p className="card-text">catchphrase: {bot.catchphrase}</p>
                        <p className="card-text">Created At: {bot.created_at}</p>
                        <p className="card-text">Updated At: {bot.updated_at}</p>
                        <button className="btn btn-primary btn-sm m-3" onClick={() => enlistBot(bot)}>Enlist</button>

                        <Link to="/">
                        <button className="btn btn-danger btn-sm m-3">Go Back</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Card;
