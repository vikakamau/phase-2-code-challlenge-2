
function Navbar({ army, removeFromArmy }) {
  function handleRemoveBot(id){
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
                  onClick={() => handleRemoveBot(bot.id)} 
                />
                <div className="card-body">
                  <h5 className="card-title">Name: {bot.name}</h5>
                  <h5 className="card-text">bot_class: {bot.bot_class}</h5>
                  <p className="card-text"><span className="icon health-icon">❤️</span>health: {bot.health}</p>
                   <p className="card-text"><span className="icon damage-icon">💥</span>damage: {bot.damage}</p>
                  <p className="card-text"><span className="icon armor-icon">🛡️</span>armor: {bot.armor}</p>
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
