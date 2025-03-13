import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from '@screens/chatScreen';
import ForgotPassword from '@screens/forgotPassword';
import PlayScreen from '@screens/playScreen';
import SignIn from '@screens/signIn';
import SignUp from '@screens/signUp';
import { screenName } from '@utils/enum';
import Charging from 'src/screens/Clone';
import Booking from 'src/screens/Create';
import Explore from 'src/screens/Enhance';
import AddStation from 'src/screens/History';
import Planner from 'src/screens/Premium';

import BottomBar from './bottomBar';

const Stack = createStackNavigator();
const RootStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Premium">
    <Stack.Screen name={screenName.BOTTOM_BAR} component={BottomBar} />
    <Stack.Screen name={screenName.BOOKING} component={Booking} />
    <Stack.Screen name={screenName.EXPLORE} component={Explore} />
    <Stack.Screen name={screenName.ADD_STATION} component={AddStation} />
    <Stack.Screen name={screenName.CHARGING} component={Charging} />
    <Stack.Screen name={screenName.PREMIUM} component={Planner} />
    <Stack.Screen name={screenName.SIGN_IN} component={SignIn} />
    <Stack.Screen name={screenName.SIGNUP} component={SignUp} />
    <Stack.Screen name={screenName.FORGOT_PASSWORD} component={ForgotPassword} />
    <Stack.Screen name={screenName.CHAT_SCREEN} component={ChatScreen} />
    <Stack.Screen name={screenName.PLAY_SCREEN} component={PlayScreen} />
  </Stack.Navigator>
);
const MainNavigator = ({ refer }) => {
  return (
    <>
      <NavigationContainer ref={refer}>
        {/*<StatusBar translucent={true} hidden={true} />*/}
        <RootStack />
      </NavigationContainer>
    </>
  );
};

export default MainNavigator;
