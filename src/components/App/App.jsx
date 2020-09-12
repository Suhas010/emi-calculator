import React from 'react';
import './app.scss';
import Master from '../Master';
import { ThemeProvider } from '../../context/TheamContext';
import Header from '../Header';
import Footer from '../Footer';

export const App = () => (
  <ThemeProvider>
    <Header />
    <Master />
    <Footer />
  </ThemeProvider>
);
