import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Votes.css';

function Votes() {
  const [president, setPresident] = useState('');
  const [primeMinister, setPrimeMinister] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');

  const navigate = useNavigate();

  const handlePresidentChange = (e) => {
    setPresident(e.target.value);
  };

  const handlePrimeMinisterChange = (e) => {
    setPrimeMinister(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      president,
      primeMinister,
      firstName,
      lastName,
      address,
      city,
      gender
    };

    try {
      const response = await fetch('http://localhost:8096/api/v2/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await response.json();
      console.log('Form submitted:', data);

      // Navigate to the Message component with the user's name
      navigate('/message', { state: { firstName, lastName } });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, show error message, etc.
    }
  };

  return (
    <div className="votes-container">
      <h2>Candidates for Election</h2>
      <form onSubmit={handleSubmit} className="votes-form">
        <div className="info-section">
          <h3>Voter Information</h3>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              placeholder="Enter your first name"
              required
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              placeholder="Enter your last name"
              required
            />
          </label>
          <label>
            Resident Address:
            <input
              type="text"
              value={address}
              onChange={handleAddressChange}
              placeholder="Enter your address"
              required
            />
          </label>
          <label>
            City:
            <input
              type="text"
              value={city}
              onChange={handleCityChange}
              placeholder="Enter your city"
              required
            />
          </label>
          <label>
            Gender:
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={gender === 'male'}
                onChange={handleGenderChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={gender === 'female'}
                onChange={handleGenderChange}
              />
              Female
            </label>
          </label>
        </div>

        <div className="candidates-section">
          <div className="candidate-group">
            <h3>President</h3>
            <label className="candidate-label">
              <div className="candidate-image candidate1"></div>
              <input
                type="radio"
                name="president"
                value="amina haji"
                checked={president === 'amina haji'}
                onChange={handlePresidentChange}
              />
              Amina Haji - Experienced leader with a vision for inclusive growth.
            </label>
            <label className="candidate-label">
              <div className="candidate-image candidate2"></div>
              <input
                type="radio"
                name="president"
                value="ali makame"
                checked={president === 'ali makame'}
                onChange={handlePresidentChange}
              />
              Ali Makame - Dedicated to community service and education reform.
            </label>
          </div>

          <div className="candidate-group">
            <h3>Prime Minister</h3>
            <label className="candidate-label">
              <div className="candidate-image candidate3"></div>
              <input
                type="radio"
                name="primeMinister"
                value="ramadhan haji"
                checked={primeMinister === 'ramadhan haji'}
                onChange={handlePrimeMinisterChange}
              />
              Ramadhan Haji - Committed to economic development and innovation.
            </label>
            <label className="candidate-label">
              <div className="candidate-image candidate4"></div>
              <input
                type="radio"
                name="primeMinister"
                value="mansour ali"
                checked={primeMinister === 'mansour ali'}
                onChange={handlePrimeMinisterChange}
              />
              Mansour Ali - Focused on sustainable policies and public health.
            </label>
          </div>
        </div>

        <button type="submit" className="small-button">Submit Votes</button>
      </form>
    </div>
  );
}

export default Votes;
