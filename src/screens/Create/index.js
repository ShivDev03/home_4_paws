import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import { ArtistList, EnhanceHeader, TextSelection, TranslationTextArea } from '@component/index';

import style from './style';
import UseColors from '../../theme/useColors';

const Create = () => {
  const { themeColors } = UseColors();
  return (
    <SafeAreaView style={[style.container, { backgroundColor: themeColors.screenBackground }]}>
      <EnhanceHeader />
      <ScrollView>
        <TranslationTextArea />
        <ArtistList />
        <TextSelection />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
