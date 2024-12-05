import React from 'react'

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={textStyle}>© 2024 Damauli Rental Cars. All rights reserved.</p>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem 0',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

const containerStyle = {
  textAlign: 'center',
};

const textStyle = {
  margin: 0,
};
  


export default Footer