import React from 'react';

import { Container } from '@mui/material';

import TourCard from './components/TourCard';

function App() {
  return (
    <div className="App">
      <Container style={{backgroundColor: 'yellow'}} maxWidth='sm'>
        Test
        <TourCard/>
      </Container>
    </div>
  );
}

export default App;
