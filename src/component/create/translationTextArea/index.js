import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import GoogleTranslationIcon from '../../../assets/icons/svgIcons/googleTranslationIcon';
import PlayBackIcon from '../../../assets/icons/svgIcons/playBackIcon';

import style from './style';
import UseColors from '../../../theme/useColors';

const TranslationTextArea = () => {
  const { themeColors } = UseColors();
  const [value, setValue] = useState('');
  return (
    <View style={[style.mainContainer, { backgroundColor: themeColors.screenBackground }]}>
      <View style={[style.container, { borderColor: themeColors.borderColor }]}>
        <TextInput
          placeholder={'Type Your Message Here..'}
          multiline={true}
          numberOfLines={4}
          onChangeText={setValue}
          value={value}
          style={style.textInputStyle}
        />
      </View>
      <View style={style.googleTranslationView}>
        <View style={style.playBackView}>
          <PlayBackIcon iconColor={themeColors.voiceExampleColor} />
          <Text style={[style.playTextStyle, { color: themeColors.voiceExampleColor }]}>Play Voice Example</Text>
        </View>
        <GoogleTranslationIcon />
      </View>
    </View>
  );
};

export default TranslationTextArea;
