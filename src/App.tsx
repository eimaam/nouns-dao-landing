import React from 'react';
import { Header } from './components/Header';
import { ReferralPage } from './components/ReferralPage';
import { MembershipCert } from './components/MembershipCert';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <MembershipCert />
      <ReferralPage />
      <Footer />
    </>
  );
}

export default App;
