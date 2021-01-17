import PushNotification from 'react-native-push-notification';
export const LocalNotification = () => {
  console.log('local notification call')
  PushNotification.localNotification({
    channelId: "Heytap PUSH",
    autoCancel: true,
    bigText:
      'This is local notification demo in React Native app. Only shown, when expanded.',
    subText: 'Local Notification Demo',
    title: 'Local Notification',
    message: 'Expand me to see more',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
    actions: '["welcome"]'
  })
}
