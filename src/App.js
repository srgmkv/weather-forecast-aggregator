import React from 'react';
import 'typeface-roboto';
import ButtonPanel from './ButtonPanel'
import Results from './Results'
import SearchInput from './SearchInput'
const App = () => {
  
  return (
    <div className="App">
      <SearchInput/>
        <ButtonPanel />
        <Results/>
    </div>
  );
}

export default App;
