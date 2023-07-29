import React from 'react';

const DisplayNotes = ({ notes }) => {
  return (
    <div>
      <p>
      {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      
      </p>
      
        
    </div>
  );
};

export default DisplayNotes;
