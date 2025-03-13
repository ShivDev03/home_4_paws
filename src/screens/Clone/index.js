import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { navigate } from '@navigation/navigationsServices';
import { screenName } from '@utils/enum';

const Clone = () => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigate(screenName.CHAT_SCREEN);
      }}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>onChat</Text>
    </TouchableOpacity>
  );
};

export default Clone;
