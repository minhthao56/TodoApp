import 'react-native-gesture-handler';
import React from 'react';
import Navigators from './src/navigators/Navigators';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Navigators />
    </Provider>
  );
};

export default App;
