import React from 'react';
import './Helps.css';
import Navbar from './Navbar';

function Helps() {
  const faqs = [
    { question: 'How do I register to vote?', answer: 'You can register to vote online, by mail, or in person at your local election office.' },
    { question: 'What is the deadline to register to vote?', answer: 'The deadline to register to vote varies by state. Check with your local election office for specific deadlines.' },
    { question: 'How do I find my polling place?', answer: 'You can find your polling place by visiting your local election office website or using online tools like the Voter Information Portal.' },
    { question: 'What do I need to bring to the polling place?', answer: 'You will need to bring a valid form of identification. Check with your local election office for specific requirements.' },
    { question: 'Can I vote by mail?', answer: 'Yes, many states offer vote-by-mail options. Check with your local election office for eligibility and procedures.' },
  ];

  return (
    <div className="Help-container">
    
      <h1>Help & FAQs</h1>
      <Navbar />
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h2>{faq.question}</h2>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Helps;
