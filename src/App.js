import React from 'react';
import { Provider } from 'react-redux';
import setupStore from './setupStore';
import Root from './Root';

const App = () => {
  return (
    <Provider store={setupStore()}>
      <Root />
    </Provider>
  );
};

export default App;
