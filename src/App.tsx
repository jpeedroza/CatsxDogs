import React, { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [cats, setCats] = useState(0);
  const [dogs, setDogs] = useState(0);

  useEffect(() => {
    console.log(`Dogs:${dogs} Cats:${cats}`);
  }, [dogs, cats])

  return (
    <div className="App">
      <section onClick={() => setCats(cats + 1)}>
        <h2>Cats</h2>
        <p>{100}%</p>
      </section>
      <span>X</span>
      <section onClick={() => setDogs(dogs + 1)}>
        <h2>Dogs</h2>
        <p>{100}%</p>
      </section>
    </div>
  );
}

export default App;
