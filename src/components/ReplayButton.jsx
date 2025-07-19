import React from 'react';

/**
 * Replay Button Component
 * @param {string} url - URL to redirect to (default: "https://birthday-nine-rust.vercel.app/")
 * @param {string} buttonText - Button label (default: "Replay")
 * @param {object} buttonStyle - Custom CSS styles for the button
 */
const ReplayButton = ({ 
  url = "https://birthday-nine-rust.vercel.app/", 
  buttonText = "Then, click here to restart from beginning, just like the life",
  buttonStyle = {}
}) => {

  const handleClick = () => {
    window.location.href = url; // Redirect in the same tab
  };

  // Base button styles
  const baseStyle = {
    padding: '12px 24px',
    backgroundColor: '#FF6B6B',  // Coral red
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '18px',
    fontWeight: 'bold',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  };

  // Hover effect
  const hoverStyle = {
    backgroundColor: '#FF5252',  // Darker red
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)'
  };

  return (
    <button
      onClick={handleClick}
      style={{ ...baseStyle, ...buttonStyle }}  // Merge custom styles
      onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = baseStyle.backgroundColor;
        e.target.style.transform = 'translateY(0)';
        e.target.style.boxShadow = baseStyle.boxShadow;
      }}
    >
      {buttonText}
    </button>
  );
};

export default ReplayButton; // Single default export
