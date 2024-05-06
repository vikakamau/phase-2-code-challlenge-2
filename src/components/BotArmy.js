// Bot.js
import React, { useState, useEffect } from "react";
import { getBots } from "../fetch";
import Button from "./button";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Bot() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    getBots().then((data) => {
      setBots(data);
    });
  }, []);

  function handleDelete(id) {
    setBots(bots.filter((bot) => bot.id !== id));
  }

  function enlistBot(bot) {
    if (enlistedBots.length < 4 && !enlistedBots.find((b) => b.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  }
  function removeFromArmy(id) {
    setEnlistedBots(enlistedBots.filter(bot => bot.id !== id));
  }

  return (
    <div>
      <Navbar army={enlistedBots} removeFromArmy={removeFromArmy}/>
      <div className="container bg-secondary">
        <div className="row">
          {bots.map((bot) => (
            <div key={bot.id} className="col-sm-3 mb-4">
              <div className="card">
                <Link to={`/cards/${bot.id}`}>
                  <img
                    src={bot.avatar_url}
                    className="card-img-top"
                    alt="Avatar"
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">Name: {bot.name}</h5>
                  <p className="card-text">Created At: {bot.created_at}</p>
                  <Button id={bot.id} onDelete={handleDelete} />
                  <button className="btn btn-primary btn-sm m-3" onClick={() => enlistBot(bot)}>Enlist</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bot;
