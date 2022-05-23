import React, {useState} from "react";
import Hero from "./components/Hero.js";

function App() {
  const heroes = [
    {
      id: 1,
      name: 'Hulk',
      date: '2019-12-30t17:30:31.098z',
      important: true
    },
    {
      id: 2,
      name: 'Spiderman',
      date: '2019-12-30t17:30:31.098z',
      important: true
    },
    {
      id: 3,
      name: 'Superman',
      date: '2019-12-30t17:30:31.098z',
      important: true
    }
  ];

  // SET STATE
  const [eroi, setEroi] = useState(heroes);
  const [newHero, setNewHero] = useState();


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
