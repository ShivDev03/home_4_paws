import { Dimensions, Platform } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import * as Yup from 'yup';

import { STANDARD_SCREEN_HEIGHT, STANDARD_SCREEN_WIDTH } from './constants';

export const wp = (val) => {
  const valInPercentage = (val * 100) / STANDARD_SCREEN_WIDTH;
  return widthPercentageToDP(valInPercentage);
};

export const hp = (val) => {
  const valInPercentage = (val * 100) / STANDARD_SCREEN_HEIGHT;
  return heightPercentageToDP(valInPercentage);
};

export const fontSize = (value) => RFValue(value, STANDARD_SCREEN_HEIGHT);

export const screenWidth = Dimensions.get('window').width;

export const screenHeight = Dimensions.get('window').height;

export const isAndroid = Platform.OS === 'android';

export const REACT_APP_GOOGLE_MAP_KEY = 'AIzaSyAlUV7Gli9S0rwtq72UMXLf9HlrRWkvqc8';

export const isIOS = Platform.OS === 'ios';

export const statusBarHeight = getStatusBarHeight();

export const validateMobileNumber = (text) => {
  // return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(text);
  return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(text);
};

export const validationEmail = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

export const validationPassword = Yup.object().shape({
  password: Yup.string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
});
export const fontFamily = {
  montserrat: 'Montserrat VariableFont',
  poppins_bold: 'Poppins Bold',
  poppins_regular: 'Poppins Regular',
  poppinsMedium: 'Poppins Medium',
  poppinsSemiBold: 'Poppins SemiBold',
  inter: 'Inter Medium',
};

export const formatTime = (minutes, seconds) => {
  let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  return `${formattedMinutes}:${formattedSeconds}`;
};
