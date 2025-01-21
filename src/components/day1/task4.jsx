import React from 'react';

const Style = () => {
  const wordStyles = {
    orange: { color: 'green', fontSize: '28px', fontWeight: 'bold' },
    coding: { color: 'orange', fontSize: '28px', fontWeight: 'bold' },
    academy: { color: 'pink', fontSize: '28px', fontWeight: 'bold' },
  };

  return (
    <h1 style={{ textAlign: 'center' }}>
      <span style={wordStyles.orange}>Orange</span>{' '}
      <span style={wordStyles.coding}>Coding</span>{' '}
      <span style={wordStyles.academy}>Academy</span>
    </h1>
  );
};

export default Style;
