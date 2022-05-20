import React from "react";
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

  const rows = () => heroes.map((hero, idx) =>
    <Hero
      key={idx}
      hero={hero}
    />
  );

  return (
    <div className="App">
      <h1>HEROES</h1>
      <ul>
        {rows()}
      </ul>
    </div>
  );
}

export default App;
