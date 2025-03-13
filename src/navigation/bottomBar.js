import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import CloneTabIcon from '@assets/icons/svgIcons/cloneTabIcon';
import CreateTabIcon from '@assets/icons/svgIcons/createTabIcon';
import EnhanceTabIcon from '@assets/icons/svgIcons/enhanceTabIcon';
import HistoryTabIcon from '@assets/icons/svgIcons/historyTabIcon';
import { icons } from '@assets/index';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import History from '@screens/History';
import { tabStackName } from '@utils/enum';
import { useTranslation } from 'react-i18next';
import Clone from 'src/screens/Clone';
import Create from 'src/screens/Create';
import Enhance from 'src/screens/Enhance';

import style from './style';
import UseColors from '../theme/useColors';

const Tab = createBottomTabNavigator();

const MyTabBar = ({ state, navigation }) => {
  const { themeColors } = UseColors();
  const icon = (label, isFocused) => {
    switch (label) {
      case 'Enhance':
        return <EnhanceTabIcon color={isFocused ? themeColors.selectedTabIconColor : themeColors.unSelectedTabIconColor} />;
      case 'Create':
        return <CreateTabIcon iconColor={isFocused ? themeColors.selectedTabIconColor : themeColors.unSelectedTabIconColor} />;
      case 'History':
        return <HistoryTabIcon iconColor={isFocused ? themeColors.selectedTabIconColor : themeColors.unSelectedTabIconColor} />;
      case 'Clone':
        return <CloneTabIcon iconColor={isFocused ? themeColors.selectedTabIconColor : themeColors.unSelectedTabIconColor} />;
    }
  };
  return (
    <View style={[style.bottomBarContainer, { backgroundColor: themeColors.screenBackground }]}>
      {state.routes.map((route, index) => {
        const label = route.name.split('_')[0].charAt(0).toUpperCase() + route.name.split('_')[0].slice(1).toLowerCase();

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (
          <TouchableOpacity key={route.key} onPress={onPress} style={[style.bottomBarButtonStyle]}>
            {isFocused && <Image source={icons.tabArrow} style={{ width: 33, height: '80%', position: 'absolute' }} />}
            {icon(label, isFocused)}
            {isFocused && <Text style={[style.bottomBarTextButtonStyle, { color: themeColors.selectedTabIconColor }]}>{label}</Text>}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomBar = () => {
  const { t } = useTranslation();
  return (
    // sell modal
    <>
      <Tab.Navigator
        initialRouteName={t(tabStackName.EXPLORE_STACK)}
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
        tabBar={(props) => {
          return <MyTabBar {...props} />;
        }}
      >
        <Tab.Screen name={tabStackName.ENHANCE_STACK} component={Enhance} />

        <Tab.Screen name={tabStackName.CREATE_STACK} component={Create} />

        <Tab.Screen name={tabStackName.HISTORY_STACK} component={History} />

        <Tab.Screen name={tabStackName.CLONE_STACK} component={Clone} />
      </Tab.Navigator>
    </>
  );
};

export default BottomBar;
