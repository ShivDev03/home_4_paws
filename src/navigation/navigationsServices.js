import { CommonActions, StackActions } from '@react-navigation/native';

let _navigator;

const setTopLevelNavigator = (navigatorRef) => {
  _navigator = navigatorRef;
};

const navigate = (routeName, params) => {
  _navigator.navigate(routeName, params);
};

const goToPreviousScreen = () => {
  _navigator.goBack();
};

const resetNavigationRoute = (routeName) => {
  _navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: routeName }],
    })
  );
};

const resetNavigationRouteStack = (routes, index) => {
  _navigator.dispatch(
    CommonActions.reset({
      index: index,
      routes: routes,
    })
  );
};

const replaceScreen = (routeName, params) => {
  _navigator.dispatch(StackActions.replace(routeName, params));
};

export { setTopLevelNavigator, navigate, resetNavigationRoute, goToPreviousScreen, resetNavigationRouteStack, replaceScreen };
