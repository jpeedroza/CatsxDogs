import React from 'react';
import '../styles/VoteWrapper.css'

const VoteWrapper: React.FC = ({ children }) => {
  return (
    <div className="wrapper">
      {children}
    </div>
  )
}

export default VoteWrapper
