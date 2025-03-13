import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import { icons } from '@assets/index';
import { ChatHeader } from '@component/index';
import { colors } from '@utils/colors';
import { USER_DUMMY_DATA } from '@utils/enum';
import { GiftedChat, Send } from 'react-native-gifted-chat';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const initialMessages = USER_DUMMY_DATA;

    setMessages(initialMessages);
  }, []);

  const onSend = (newMessages = []) => {
    const messageText = newMessages[0].text;

    const mainMessage = {
      _id: Math.round(Math.random() * 1000000),
      text: messageText,
      createdAt: new Date(),
      user: {
        _id: 1,
      },
    };

    setMessages(GiftedChat.append(messages, mainMessage));
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <Image source={icons.sendIcon} style={{ height: 30, width: 30, marginBottom: 5, marginRight: 5 }} />
      </Send>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: colors.gray68 }}>
      <ChatHeader />
      <GiftedChat
        scrollToBottom
        alwaysShowSend={true}
        messages={messages}
        renderSend={renderSend}
        onSend={onSend}
        user={{
          _id: 1,
        }}
      />
    </View>
  );
};

export default ChatScreen;
