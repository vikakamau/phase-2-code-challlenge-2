
import React from 'react';

function Navbar({ army, removeFromArmy }) {
  const handleRemoveFromArmy = (id) => {
    removeFromArmy(id);
  };

  const displayedArmy = army.slice(0, 4);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          {displayedArmy.map(bot => (
            <li key={bot.id} className="nav-item">
              <div className="card">
                <img
                  src={bot.avatar_url}
                  className="card-img-top"
                  alt="Avatar"
                  onClick={() => handleRemoveFromArmy(bot.id)} 
                />
                <div className="card-body">
                  <h5 className="card-title">Name: {bot.name}</h5>
                  <p className="card-text">Created At: {bot.created_at}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
