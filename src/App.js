import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name="Eugene Jordan" avatar="https://randomuser.me/api/portraits/men/39.jpg" online/>
      <Contact name="Denise Mendoza" avatar="https://randomuser.me/api/portraits/women/56.jpg" offline/>
      <Contact name="Edgar Reid" avatar="https://randomuser.me/api/portraits/men/64.jpg" online/>
    </div>
  );
}

export default App;
