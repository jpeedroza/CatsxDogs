import React from 'react';
import '../VoteWrapper.css'

const VoteWrapper: React.FC = ({ children }) => {
  return (
    <div className="wrapper">
      {children}
    </div>
  )
}

export default VoteWrapper
