import React from 'react';
import './Message.css';
import { useLocation } from 'react-router-dom';

function Message() {
  const location = useLocation();
  const { firstName, lastName } = location.state;

  return (
    <div className="message-container">
      <h2>Thank You for Voting!</h2>
      <p>Hello {firstName} {lastName},</p>
      <p>Thank you for voting.</p>
      <p>We would like to inform you that the announcement for President and Prime Minister will be held at Suza Tunguu.</p>
      <p>The time for the announcement will be announced soon.</p>
    </div>
  );
}

export default Message;
