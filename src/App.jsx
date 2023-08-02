import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Account, Home, Contact, Login, About } from "./pages";
import { Navbar, Footer } from "./components";
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector((state) => state.token);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={token ? <Account /> : <Login />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
