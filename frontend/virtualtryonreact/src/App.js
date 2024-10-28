import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import welcomepage from './welcomepage'; // Ensure the filename is lowercase
import tryonpage from './tryonpage';     // Ensure the filename is lowercase

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<welcomepage />} />
        <Route path="/tryon" element={<tryonpage />} />
      </Routes>
    </Router>
  );
}

export default App;
