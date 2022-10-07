import React from 'react';
import { Header, Footer, Hero, Features, Articles } from '@/components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Articles />
      </main>
      <Footer />
    </>
  );
}

export default App;
