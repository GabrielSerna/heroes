import axios from "axios";
import React, {useState, useEffect} from "react";
import Hero from "./components/Hero.js";

const App = () => {

  // USEEFFECT
  useEffect(() => {
    console.log('effect');
    axios
      .get('http://localhost:3001/heroes')
      .then(res => {
        console.log('promise fulfilled')
        setHeroes(res.data)
      });
  }, []);

  // SET STATE
  const [heroes, setHeroes] = useState([]);
  const [newHero, setNewHero] = useState();
  const [showAll, setShowAll] = useState(true);

  const heroesToShow = showAll ? heroes : heroes.filter( el => el.important === true );

  const addHero = e => {
    e.preventDefault();
    // console.log('Button clicked', e.target);
    // console.log('Button clicked', e);

    const heroObj = {
      id: heroes.length + 1,
      name: newHero,
      date: new Date().toISOString(),
      important: Math.random() > 0.5
    };

    axios
      .post('http://localhost:3001/heroes', heroObj)
      .then(res => {
        setHeroes(heroes.concat(heroObj));
        setNewHero('');
      });
  };

  const rows = () => heroes.map((hero, idx) =>
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
