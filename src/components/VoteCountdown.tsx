import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../VoteCountdown.css';
import VoteWrapper from './VoteWrapper';

const VoteCountdown: React.FC = () => {
  const [cats, setCats] = useState(0);
  const [dogs, setDogs] = useState(0);
  const [update, setUpdate] = useState(0);
  const computeValues = {
    async postVotes(type: string) {
      await axios.post('http://localhost:3001/votes', {
        vote: type
      }).catch((err) => {
        console.log('Erro na computacão do voto', err)
      })
      setUpdate(update + 1);
    },
    async getDataVotes() {
      await axios.get('http://localhost:3001/results').then((response) => {
        setDogs(response.data.result[0].votes)
        setCats(response.data.result[1].votes)
      }).catch(() => {
        console.log('Sem captura de dados')
      })
    },
    calculatePercent(type: number) {
      return cats === 0 && dogs === 0
        ? 100
        : ((type / (cats + dogs)) * 100).toFixed(1)
    }
  }
  useEffect(() => {
    computeValues.getDataVotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update])

  return (
    <VoteWrapper>
      <section className="voteSession" onClick={() => { computeValues.postVotes("cats") }}>
        <h2 className="mainTextVote">Cats</h2>
        <p className="secondTextVote">{computeValues.calculatePercent(cats)}%</p>
      </section>
      <span className="divisor">X</span>
      <section className="voteSession" onClick={() => { computeValues.postVotes("dogs") }}>
        <h2 className="mainTextVote">Dogs</h2>
        <p className="secondTextVote">{computeValues.calculatePercent(dogs)}%</p>
      </section>
    </VoteWrapper>
  );
}

export default VoteCountdown;
