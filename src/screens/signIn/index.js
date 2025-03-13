import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';

import { icons } from '../../assets';
import { Icon, Separator, TeslaCommonLogoTextStyle, TextInputWithLabel } from '../../component/index';

import { navigate } from '../../navigation/navigationsServices';
import {
  buttonName as BUTTON_NAME,
  errorMessage as ERROR_MESSAGE, otherAuthLines as OTHER_AUTH_LINES,
  screenName,
  textInputLabel as TEXT_INPUT_LABEL,
} from '../../utils/enum';

import style from './style';
import {screenName as SCREEN_TITLE, textInputPlaceHolder as TEXT_INPUT_PLACEHOLDER} from '../../utils/enum';

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);


  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <TeslaCommonLogoTextStyle />
        <View style={style.subContainer}>
          <Text style={style.signInTextStyle}>{SCREEN_TITLE.SIGN_IN}</Text>
          <TextInputWithLabel
            placeholder={TEXT_INPUT_PLACEHOLDER.ENTER_YOUR_EMAIL}
            value={email}
            setValue={setEmail}
            hasIcon
            icon={icons.email}
            label={TEXT_INPUT_LABEL.EMAIL_ADDRESS}
            containerStyle={style.textInputContainerStyle}
            isErrorVisible={error}
            errorMessage={ERROR_MESSAGE.INVALID_EMAIL}
          />
          <TextInputWithLabel
            label={TEXT_INPUT_LABEL.PASSWORD}
            hasPassword
            setValue={setPassword}
            value={password}
            hasSecureTextEntry={true}
            placeholder={TEXT_INPUT_PLACEHOLDER.ENTER_YOUR_PASSWORD}
            containerStyle={style.textInputContainerStyle}
            isErrorVisible={error}
            errorMessage={ERROR_MESSAGE.INVALID_PASSWORD}
          />
          <Text
            style={style.forgotPasswordTextStyle}
            onPress={() => {
              navigate(screenName.FORGOT_PASSWORD);
            }}
          >
            {BUTTON_NAME.RESET_PASSWORD}?
          </Text>

          <View style={style.separatorView}>
            <Separator />

            <Text style={style.separatorText}>or</Text>

            <Separator />
          </View>
          <View style={style.authIconView}>
            <Icon source={icons.google} ImageStyle={style.googleImageStyle} />
            <Icon source={icons.facebook} ImageStyle={style.fbImageStyle} />
          </View>
          <View style={style.doNotAccountView}>
            <Text>{OTHER_AUTH_LINES.DONT_HAVE_A_ACCOUNT}? </Text>
            <Text
              onPress={() => {
                navigate(screenName.SIGNUP);
              }}
            >
              {BUTTON_NAME.SIGNUP}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignIn;
