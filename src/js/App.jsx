import React from 'react';
import ContextProvider from '@store/ContextProvider';
import CharacterPage from '@features/CharacterPage';
import './app.css';

const App = () => (
  <ContextProvider>
    <CharacterPage />
  </ContextProvider>
);
export default App;
