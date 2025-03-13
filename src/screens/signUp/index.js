import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import { icons } from '../../assets';
import { Button, TeslaCommonLogoTextStyle, TextInputWithLabel } from '../../component';
import { navigate } from '../../navigation/navigationsServices';
import {
  screenName as BUTTON_NAME,
  screenName,
  textInputLabel as TEXT_INPUT_LABEL,
  textInputPlaceHolder as TEXT_INPUT_PLACEHOLDER,
} from '../../utils/enum';

import style from './style';

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <TeslaCommonLogoTextStyle />

        <View style={style.subContainer}>
          <Text style={style.signUpTextStyle}>SIGN_UP</Text>
          <TextInputWithLabel label={TEXT_INPUT_LABEL.FULL} placeholder={TEXT_INPUT_PLACEHOLDER.ENTER_YOUR_NAME} />

          <TextInputWithLabel
            placeholder={TEXT_INPUT_PLACEHOLDER.ENTER_YOUR_EMAIL}
            value={email}
            setValue={setEmail}
            hasIcon
            icon={icons.email}
            label={TEXT_INPUT_LABEL.EMAIL_ADDRESS}
          />

          <TextInputWithLabel
            label={TEXT_INPUT_LABEL.MOBILE_NUMBER}
            placeholder={TEXT_INPUT_PLACEHOLDER.ENTER_YOUR_NUMBER}
            hasIcon
            icon={icons.smartPhone}
          />
          <TextInputWithLabel
            label={TEXT_INPUT_LABEL.PASSWORD}
            hasPassword
            setValue={setPassword}
            value={password}
            hasSecureTextEntry={true}
            placeholder={TEXT_INPUT_PLACEHOLDER.ENTER_YOUR_PASSWORD}
          />

          <TextInputWithLabel
            label={TEXT_INPUT_LABEL.CONFIRM_PASSWORD}
            hasPassword
            setValue={setPassword}
            value={password}
            hasSecureTextEntry={true}
            placeholder={TEXT_INPUT_PLACEHOLDER.ENTER_YOUR_CONFIRM_PASSWORD}
          />
          <View style={style.spacer} />

          <View style={style.doNotAccountView}>
            <Text>{OTHER_AUTH_LINES.ALREADY_HAVE_A_ACCOUNT}? </Text>
            <Text
              onPress={() => {
                navigate(screenName.SIGN_IN);
              }}
            >
              {BUTTON_NAME.SIGN_IN}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUp;
