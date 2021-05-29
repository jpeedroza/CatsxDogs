import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [cats, setCats] = useState(0);
  const [dogs, setDogs] = useState(0);
  const computeValues = (type: string) => {
    axios.post('/vote', {
      vote: type
    })
  }
  useEffect(() => {
    console.log(`Dogs:${dogs} Cats:${cats}`);
  }, [dogs, cats])

  return (
    <div className="App">
      <section onClick={() => {
        setCats(cats + 1);
        computeValues("cats")
      }
      }>
        <h2>Cats</h2>
        <p>{
          cats === 0 && dogs === 0
            ? 100
            : ((cats / (cats + dogs)) * 100).toFixed(1)
        }
        %</p>
      </section>
      <span>X</span>
      <section onClick={() => {
        setDogs(dogs + 1);
        computeValues("dogs")
      }
      }>
        <h2>Dogs</h2>
        <p>{
          dogs === 0 && cats === 0
            ? 100
            : ((dogs / (cats + dogs)) * 100).toFixed(1)
        }
        %</p>
      </section>
    </div>
  );
}

export default App;
