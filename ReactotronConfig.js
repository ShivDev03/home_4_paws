import AsyncStorage from '@react-native-async-storage/async-storage';
import apiSaucePlugin from 'reactotron-apisauce';
import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

export default Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(apiSaucePlugin())
    .use(sagaPlugin())
    .use(reactotronRedux())
    .connect(); // let's connect!
