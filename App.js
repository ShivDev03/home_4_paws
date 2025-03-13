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
import { setupPlayer } from './src/services/playerManager';

import './src/hooks/languages/i18next';
import ErrorScreen from './src/services/ErrorScreen';
import {
    backgroundNotification,
    createChannel,
    ForegroundMessages,
    RequestUserPermission,
    stopNavigationIntervals,
} from './src/services/noitfication';
import checkAndRequestMultiplePermissions, { PERMISSION_DATA } from './src/services/permissionManager';
import StoreProvider from './src/services/StoreProvider';

const setNavigationRef = (navigatorRef) => {
    setTopLevelNavigator(navigatorRef);
};

LogBox.ignoreAllLogs();

const App = () => {
    useEffect(() => {
        checkAndRequestMultiplePermissions(PERMISSION_DATA.ACCESS_FINE_LOCATION, ({ granted, denied }) => {});
        RequestUserPermission();
        createChannel();
        ForegroundMessages();
        backgroundNotification();
        setupPlayer();
        return () => stopNavigationIntervals();
    }, []);

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
