import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { UserSearch } from './components/UserSearch';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-white to-purple-100">
      <Hero />
      <div className="bg-gradient-to-b from-purple-100 via-white to-purple-100">
        <Services />
        <Pricing />
        <UserSearch />
        <Contact />
      </div>
    </div>
  );
}

export default App;