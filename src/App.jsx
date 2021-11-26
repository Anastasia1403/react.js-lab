import React from 'react';
import MainRouter from './routes/MainRouter';

const App = function (history) {
  return (

    <MainRouter history={history} />
  );
};

export default App;
