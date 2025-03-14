import { Dimensions, Platform } from 'react-native';


import * as Yup from 'yup';

export const wp = (val) => {

  return val;
};

export const hp = (val) => {
 return val;
};

export const fontSize = (value) => value;

export const screenWidth = Dimensions.get('window').width;

export const screenHeight = Dimensions.get('window').height;

export const isAndroid = Platform.OS === 'android';

export const REACT_APP_GOOGLE_MAP_KEY = 'AIzaSyAlUV7Gli9S0rwtq72UMXLf9HlrRWkvqc8';

export const isIOS = Platform.OS === 'ios';


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
  bebasNeue_regular: 'BebasNeue-Regular',
};

export const formatTime = (minutes, seconds) => {
  let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
  let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

  return `${formattedMinutes}:${formattedSeconds}`;
};
