import { Platform } from 'react-native';

import { navigate } from '@navigation/navigationsServices';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

export async function RequestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    await checkToken();
  }
}

const checkToken = async () => {
  const fcmToken = await messaging().getToken();
  if (fcmToken) {
  }
};

export const NotificationListner = () => {
  messaging().onNotificationOpenedApp((remoteMessage) => {
    return NotificationListner;
  });
};
export const createChannel = () => {
  PushNotification.createChannel(
    {
      channelId: '1234', // (required)
      channelName: 'My channel', // (required)
      channelDescription: 'A channel to categorise your notifications',
      playSound: false,
      soundName: 'default',
      vibrate: true,
      repeatType: false,
    },
    (created) => console.log(`createChannel returned '${created}'`)
  );
};
export const ForegroundMessages = async () => {
  Platform.OS === 'android' &&
    messaging().onMessage(async (remoteMessage) => {
      await PushNotification.localNotification({
        channelId: '1234',
        message: remoteMessage?.notification?.body,
        title: remoteMessage?.notification?.title,
      });
    });

  return ForegroundMessages;
};

let intervalId;
export const backgroundNotification = () => {
  messaging()
    .getInitialNotification()
    .then(async (remoteMessage) => {
      if (remoteMessage?.data?.clickAction) {
        intervalId = setInterval(() => {
          navigate(`${remoteMessage?.data?.clickAction}`);
        }, 2000);
      }
    })
    .catch((e) => {});
};

export const stopNavigationIntervals = () => {
  clearInterval(intervalId);
};
export const MessageForIos = () => {
  messaging().onMessage(async (remoteMessage) => {
    PushNotificationIOS.presentLocalNotification({
      alertTitle: remoteMessage.notification.title,
      alertBody: remoteMessage.notification.body,
    });
  });

  return MessageForIos;
};
