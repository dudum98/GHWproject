import React, { useState } from 'react';
import './App.css';
  
function MainPage () {
  const [notes, setNotes] = useState('');

  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Enter Your Private Notes</h1>
        <textarea
          rows="10"
          cols="50"
          value={notes}
          onChange={handleNotesChange}
          placeholder="Write your private notes here..."
        />
        <br/>
        <button type="submit">Save</button>

      </header>
    </div>
  );  }    
  
  export default MainPage;