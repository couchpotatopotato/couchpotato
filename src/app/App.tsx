import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './Main';

const App = () => {
  return (
    <Suspense fallback>
      <Router>
        <Main />
      </Router>
    </Suspense>
  );
};

export default App;
