import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const onChange = (e) => {
    setName(e.target.value);
  }

  return (
    <div className="App">
      {name}
      <input type="text" name="name" onChange={onChange}/>
    </div>
  );
}

export default App;
