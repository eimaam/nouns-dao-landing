import React from 'react';
import logo from './logo.svg';
import './App.css';
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
