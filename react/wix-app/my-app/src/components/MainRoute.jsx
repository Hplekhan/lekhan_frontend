import React from 'react'
import {  Route, BrowserRouter, Routes } from "react-router-dom";
import FoodPhotographer from "./FoodPhotographer";
import AboutPage from "./AboutPage";
import Portfolio from './Portfolio';
import BooksPage from './BooksPage';
import Clients from './Clients';
import ContactPage from './ContactPage';

export const MainRoute = () => {
    return (
      <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<FoodPhotographer/>}/>
          <Route path="about" element={<AboutPage/>}/>
          <Route path="portfolio" element={<Portfolio/>}/>
          <Route path="books" element={<BooksPage/>}/>
          <Route path="client-albums" element={<Clients/>}/>
          <Route path="contact" element={<ContactPage/>}/>
          
      </Routes>
      </BrowserRouter>
      </>
    )
  }
  
export default MainRoute;
