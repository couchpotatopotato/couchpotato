import React, { ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from 'components/navbar';
import { ROOT } from 'constants/routes';
import { Home } from 'routes/home';

import './Main.scss';

const redirectToHome: ReactNode = <Navigate to="/" />;

const Main = () => {
  return (
    <main id="main">
      <Navbar />
      <div className="main-page">
        <Routes>
          <Route element={<Home />} path={ROOT} />
          <Route element={redirectToHome} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
