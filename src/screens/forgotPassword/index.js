import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { icons } from '../../assets';
import {  Header, TextInputWithLabel } from '../../component/';

import style from './style';
import {
    screenName as SCREEN_TITLE,
    textInputLabel as TEXT_INPUT_LABEL,
    textInputPlaceHolder as TEXT_INPUT_PLACEHOLDER,
} from '../../utils/enum';

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  return (
    <SafeAreaView style={style.container}>
      <Header />
      <View style={style.mainView}>
        <Text style={style.forgotPasswordTextStyle}>{SCREEN_TITLE.FORGOT_PASSWORD}</Text>

        <TextInputWithLabel
          value={email}
          setValue={setEmail}
          label={TEXT_INPUT_LABEL.EMAIL_ADDRESS}
          placeholder={TEXT_INPUT_PLACEHOLDER.ENTER_YOUR_EMAIL}
          hasIcon={true}
          icon={icons.email}
        />
      </View>
    </SafeAreaView>
  );
};
export default ForgotPassword;
