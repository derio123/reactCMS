import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../../global-styles';
import Layout from '../../components/layouts';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
      <GlobalStyle />

    </div>
  );
}
