import React from 'react';
import 'typeface-roboto';
import ButtonPanel from '../components/ButtonPanel'
import Results from '../components/Results'
import SearchInput from '../components/SearchInput'
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
