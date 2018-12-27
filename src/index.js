import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from 'store';

import 'config/ReactotronConfig';
import Routes from 'routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
