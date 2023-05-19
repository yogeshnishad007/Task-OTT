import React, { useState } from 'react';
import "../style.css"

const MenuBar = () => {
  const [selectedOption, setSelectedOption] = useState('Recommended');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const showOptions = [
    { option: 'Recommended', description: 'Recommended for you' },
    { option: 'Animated', description: 'Animated Adventures' },
    { option: 'Popular', description: 'Popular Shows/Drama' },
    { option: 'New', description: 'New & Upcoming' },
  ];

  return (
    <div>
      <ul className="menu-bar">
        {showOptions.map((show) => (
          <li
            key={show.option}
            className={selectedOption === show.option ? 'active' : ''}
            onClick={() => handleOptionClick(show.option)}
          >
            <img src={`path_to_${show.option}_image`} alt={show.option} />
            <span>{show.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuBar;
