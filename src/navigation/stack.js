import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Charging from 'src/screens/Clone';
import Booking from 'src/screens/Create';
import Explore from 'src/screens/Enhance';
import AddStation from 'src/screens/History';
import Planner from 'src/screens/Premium';

const Stack = createStackNavigator();

export const ExploreStack = () => {
  return (
    <Stack.Navigator initialRouteName="Explore" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
};
export const BookingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Booking" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Booking" component={Booking} />
    </Stack.Navigator>
  );
};

export const AddStationStack = () => {
  return (
    <Stack.Navigator initialRouteName="AddStation" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AddStation" component={AddStation} />
    </Stack.Navigator>
  );
};

export const ChargingStack = () => {
  return (
    <Stack.Navigator initialRouteName="Charging" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Charging" component={Charging} />
    </Stack.Navigator>
  );
};

export const PlannerStack = () => {
  return (
    <Stack.Navigator initialRouteName="Planner" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Planner" component={Planner} />
    </Stack.Navigator>
  );
};
