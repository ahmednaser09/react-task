import React from 'react';

const MultipleStylesComponent = () => {

  const containerStyle = {
    backgroundColor: '#f5f5f5',    
    padding: '20px', 
    borderRadius: '8px',   
    textAlign: 'center',    
  };

  const headingStyle = {
    color: 'purple',    
    fontSize: '32px', 
    marginBottom: '10px',     
  };

  const paragraphStyle = {
    color: 'darkgray',   
    fontSize: '18px',   
    lineHeight: '1.6',   
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Multiple Styles</h1>
     
    </div>
  );
};

export default MultipleStylesComponent;
