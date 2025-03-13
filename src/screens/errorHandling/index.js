import React from 'react';
import { Text, View } from 'react-native';

import style from './style';

const ErrorHandling = (props) => (
  <View style={style.container}>
    <Text style={style.title}>Something happened!</Text>
    <Text style={style.text}>{props.error.toString()}</Text>
  </View>
);

export default ErrorHandling;
