import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import { persistor, store } from '../reducers/store/index';

const StoreProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
export default StoreProvider;
