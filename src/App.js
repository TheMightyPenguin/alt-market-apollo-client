import React from 'react';
import { Provider } from 'react-redux';
import setupStore from './setupStore';
import Root from './Root';

const App = () => (
  <Provider store={setupStore()}>
    <Root />
  </Provider>
);

export default App;
