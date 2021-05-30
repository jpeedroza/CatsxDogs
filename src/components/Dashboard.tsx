import React, { useEffect, useState } from 'react'
import VoteWrapper from "./VoteWrapper"
import '../styles/Dashboard.css'
import axios from 'axios';
import VoteCountdown from './VoteCountdown';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [cats, setCats] = useState(0);
  const [dogs, setDogs] = useState(0);
  const getDataVotes = async () => {
    await axios.get('http://localhost:3001/results').then((response) => {
      setDogs(response.data.result[0].votes)
      setCats(response.data.result[1].votes)
    }).catch(() => {
      console.log('Sem captura de dados')
    })
  }

  useEffect(() => {
    getDataVotes();
  }, [])

  return (
    <VoteWrapper>
      <li>
        <ul>
          <Link to="/votes"><button>Create Table in DB</button></Link>
        </ul>
        <ul>
          <Link to="/votes"><button>Reset Votes</button></Link>
        </ul>
        <ul>
          <Link to="/votes"><button>Go Vote!</button></Link>
        </ul>
      </li>
      <section>
        <h2>Cats</h2>
        <p>{cats}</p>
      </section>
      <span>X</span>
      <section>
        <h2>Dogs</h2>
        <p>{dogs}</p>
      </section>
    </VoteWrapper>
  )
}

export default Dashboard
