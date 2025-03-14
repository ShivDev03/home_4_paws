import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPassword from '../screens/forgotPassword';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import ProductDetails from '../screens/productDetails';
import { screenName } from '../utils/enum';

import BottomBar from './bottomBar';

const Stack = createStackNavigator();
const RootStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="BottomBar">
    <Stack.Screen name={screenName.BOTTOM_BAR} component={BottomBar} />
    <Stack.Screen name={screenName.SIGN_IN} component={SignIn} />
    <Stack.Screen name={screenName.SIGNUP} component={SignUp} />
    <Stack.Screen name={screenName.FORGOT_PASSWORD} component={ForgotPassword} />
    <Stack.Screen name={screenName.PRODUCT_DETAILS} component={ProductDetails} />
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
