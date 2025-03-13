import { buttonName, errorMessage, otherAuthLines, ScreenTitle, textInputLabel, textInputPlaceHolder } from '@utils/enum';
import { useTranslation } from 'react-i18next';

const UseMultiLanguage = () => {
  const { t } = useTranslation();

  return {
    BUTTON_NAME: {
      SIGN_IN: t(buttonName.SIGNIN),
      SIGNUP: t(buttonName.SIGNUP),
      RESET_PASSWORD: t(buttonName.RESET_PASSWORD),
    },
    SCREEN_TITLE: {
      EXPLORE: t(ScreenTitle.EXPLORE),
      BOOKING: t(ScreenTitle.BOOKING),
      ADD_STATION: t(ScreenTitle.ADD_STATION),
      CHARGING: t(ScreenTitle.CHARGING),
      PLANNER: t(ScreenTitle.PLANNER),
      SIGN_IN: t(ScreenTitle.SIGN_IN),
      SIGN_UP: t(ScreenTitle.SIGNUP),
      FORGOT_PASSWORD: t(ScreenTitle.FORGOT_PASSWORD),
    },
    TEXT_INPUT_LABEL: {
      FULL: t(textInputLabel.FULL),
      EMAIL_ADDRESS: t(textInputLabel.EMAIL_ADDRESS),
      MOBILE_NUMBER: t(textInputLabel.MOBILE_NUMBER),
      PASSWORD: t(textInputLabel.PASSWORD),
      CONFIRM_PASSWORD: t(textInputLabel.CONFIRM_PASSWORD),
    },
    TEXT_INPUT_PLACEHOLDER: {
      ENTER_YOUR_NAME: t(textInputPlaceHolder.ENTER_YOUR_NAME),
      ENTER_YOUR_EMAIL: t(textInputPlaceHolder.ENTER_YOUR_EMAIL),
      ENTER_YOUR_NUMBER: t(textInputPlaceHolder.ENTER_YOUR_NUMBER),
      ENTER_YOUR_PASSWORD: t(textInputPlaceHolder.ENTER_YOUR_PASSWORD),
      ENTER_YOUR_CONFIRM_PASSWORD: t(textInputPlaceHolder.ENTER_YOUR_CONFIRM_PASSWORD),
    },
    ERROR_MESSAGE: {
      INVALID_EMAIL: t(errorMessage.INVALID_EMAIL),
      INVALID_PASSWORD: t(errorMessage.INVALID_PASSWORD),
    },
    OTHER_AUTH_LINES: {
      DONT_HAVE_A_ACCOUNT: t(otherAuthLines.DONT_HAVE_A_ACCOUNT),
      ALREADY_HAVE_A_ACCOUNT: t(otherAuthLines.ALREADY_HAVE_A_ACCOUNT),
    },
  };
};

export default UseMultiLanguage;
