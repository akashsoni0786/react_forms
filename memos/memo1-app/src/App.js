import React from 'react';
import './App.css';
import Compo1 from './Compo1';

export const MyContext = React.createContext();

function App() {
  return (
    <MyContext.Provider value="Akash">
      <Compo1 />

    </MyContext.Provider>
  );
}

export default App;
