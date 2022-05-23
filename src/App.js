import React, {useState} from "react";
import Hero from "./components/Hero.js";

function App() {

  // SET STATE
  const [eroi, setEroi] = useState(heroes);
  const [newHero, setNewHero] = useState();
  const [showAll, setShowAll] = useState(true);

  const heroesToShow = showAll ? eroi : eroi.filter( el => el.important === true );

  const addHero = e => {
    e.preventDefault();
    // console.log('Button clicked', e.target);
    // console.log('Button clicked', e);
    const heroObj = {
      id: eroi.length + 1,
      name: newHero,
      date: new Date().toISOString(),
      important: Math.random() > 0.5
    };

    setEroi(heroes.concat(heroObj));
    setNewHero('');
  };

  const rows = () => eroi.map((hero, idx) =>
    <Hero
      key={idx}
      hero={hero}
    />
  );

  const handleHeroChange = e => {
    console.log(e.target.value);
    setNewHero(e.target.value);
  };

  return (
    <div className='App'>
      <h1>HEROES</h1>

      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'Important' : 'All'}
      </button>

      <ul>
        {rows()}
      </ul>

      <form onSubmit={addHero}>
        <input
          type='text'
          value={newHero}
          onChange={handleHeroChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
