import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';

import { icons } from '@assets/index';
import { Button, Header, TextInputWithLabel } from '@component/index';
import UseMultiLanguage from '@hooks/useMultiLanguage';

import style from './style';

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const { BUTTON_NAME, SCREEN_TITLE, TEXT_INPUT_PLACEHOLDER, TEXT_INPUT_LABEL } = UseMultiLanguage();
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
