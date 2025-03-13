import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { icons } from '@assets/index';
import { colors } from '@utils/colors';

import style from './style';
import Icon from '../icon';

const TextInputWithLabel = ({
  rest,
  value,
  setValue,
  errorMessage,
  containerStyle,
  isErrorVisible,
  hasSecureTextEntry,
  placeholder,
  hasEditOption,
  onPressEditOption,
  maxLength,
  hasPassword,
  editable,
  keyboardType,
  hasIcon,
  icon,
  label,
}) => {
  const [isSecure, setSecure] = useState(hasSecureTextEntry);

  return (
    <View style={containerStyle}>
      <Text style={style.labelTextStyle}>{label}</Text>
      <View style={style.textInputView}>
        <TextInput
          editable={editable}
          autoCapitalize={'none'}
          style={style.textInputOriginStyle}
          secureTextEntry={isSecure}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength} // Limit input to 6 characters
          placeholderTextColor={colors.gray68}
          onChangeText={(text) => setValue(text)}
          selectionColor={'black'}
          keyboardType={keyboardType}
          {...rest}
        />
        {hasIcon && <Icon source={icon} ImageStyle={style.safeEntryIconContainerStyle} activeOpacity={1} />}

        {hasPassword && (
          <Icon
            source={isSecure ? icons.eyeHide : icons.eyeView}
            ImageStyle={style.safeEntryIconContainerStyle}
            onPress={() => setSecure(!isSecure)}
          />
        )}

        {hasEditOption && (
          <TouchableOpacity activeOpacity={1} onPress={onPressEditOption} style={style.editTextContainer}>
            <Text style={style.editTextStyle}>Edit</Text>
          </TouchableOpacity>
        )}
      </View>

      {isErrorVisible && <Text style={style.errorMessageText}>{errorMessage}</Text>}
    </View>
  );
};

export default TextInputWithLabel;
