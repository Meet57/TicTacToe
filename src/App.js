import React from 'react';
import { Table } from './components/Table';
import { GameContextProvider } from './Context/GameContext';

function App() {
  return (
    <GameContextProvider>
        <Table />
    </GameContextProvider>
  );
}

export default App;
