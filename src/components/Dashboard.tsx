import React, { useEffect, useState } from 'react'
import VoteWrapper from "./VoteWrapper"
import '../styles/Dashboard.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [cats, setCats] = useState(0);
  const [dogs, setDogs] = useState(0);
  const [update, setUpdate] = useState(0);
  const fetchDatas = {
    async getDataVotes() {
      await axios.get('http://localhost:3001/results').then((response) => {
        setDogs(response.data.result[0].votes)
        setCats(response.data.result[1].votes)
      }).catch(() => {
        console.log('Sem captura de dados')
      })
    },
    async cleanVotes() {
      await axios.post('http://localhost:3001/cleanup')
      setUpdate(update + 1)
    },
    async createTable() {
      await axios.get('http://localhost:3001/')
    }
  }

  useEffect(() => {
    fetchDatas.getDataVotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update])

  return (
    <VoteWrapper>
      <li>
        <ul>
          <button onClick={() => fetchDatas.createTable()}>Create Table in DB</button>
        </ul>
        <ul>
          <button onClick={() => fetchDatas.cleanVotes()}>Reset Votes</button>
        </ul>
        <ul>
          <Link to="/votes"><button>Go Vote!</button></Link>
        </ul>
      </li>
      <section className="tables">
        <h2>Cats</h2>
        <p>{cats}</p>
      </section>
      <section className="tables">
        <h2>Dogs</h2>
        <p>{dogs}</p>
      </section>
    </VoteWrapper>
  )
}

export default Dashboard
