import React from 'react';
import Navbar from './Navbar'; // Adjust the path based on your project structure
import './Home.css';

function Home() {
  // Additional information about the project
  const projectDescription = `
    The School Voting System is designed to empower students by enabling them to participate 
    actively in school elections. This platform ensures that every student's voice is heard 
    through secure and transparent voting processes.
  `;

  return (
    <div className="home-container">
      <div className="center-content">
        <h1>Welcome to the School Voting System</h1>
        <p>{projectDescription}</p>
        <Navbar />
      </div>

      <footer>
        <p>&copy; 2024 School Voting System. All rights reserved.</p>
        <p>Contact us: support@schoolvotingsystem.com</p>
      </footer>
    </div>
  );
}

export default Home;
