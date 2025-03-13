/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import MainNavigator from './src/navigation';
import { setTopLevelNavigator } from './src/navigation/navigationsServices';


import ErrorScreen from './src/services/ErrorScreen';

import StoreProvider from './src/services/StoreProvider';

const setNavigationRef = (navigatorRef) => {
    setTopLevelNavigator(navigatorRef);
};

LogBox.ignoreAllLogs();

const App = () => {


    return (
        <>
            <ErrorScreen>
                <StoreProvider>
                    <MainNavigator refer={setNavigationRef} />
                </StoreProvider>
            </ErrorScreen>
        </>
    );
};
export default App;
