// import React from 'react'
// import { Text, View, Button, StyleSheet } from 'react-native'
// //import { LocalNotification } from '../NotificationService.js'
// import PushNotification from "react-native-push-notification";
// import { LocalNotification } from '../NotificationService';
// const App = () => {
//   const handleButtonPress = () => {
//    // LocalNotification()
//    console.log('done')
  
//    PushNotification.getChannels(function (channel_ids) {
//     console.log(channel_ids); // ['channel_id_1']
//   });
//  LocalNotification()
//   }
// return (
//     <View style={styles.container}>
//       <Text>Press a button to trigger the notification</Text>
//       <View style={{ marginTop: 20 }}>
//         <Button title={'Local Push Notification'} onPress={handleButtonPress} />
//       </View>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   buttonContainer: {
//     marginTop: 20
//   }
// })
// export default App;
// // import React, { Component } from 'react';
// // import { AppState, View, Button, Text, StyleSheet } from 'react-native';
// // import PushNotification from 'react-native-push-notification';
// // import PushController from '../NotificationService.js'; //The push controller created earlier

// // export default class HomeScreen extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {};
// //     this.handleAppStateChange = this.handleAppStateChange.bind(this);
// //     this.sendNotification = this.sendNotification.bind(this);
// //   };
  
// //   componentDidMount() {
// //     AppState.addEventListener('change', this.handleAppStateChange);
// //   };
  
// //   componentWillUnmount() {
// //     AppState.removeEventListener('change', this.handleAppStateChange);
// //   };
  
// //   // This will notify the user in 3 seconds after sending the app to the 
// //   // background (like after pressing the home button or switching apps)
// //   handleAppStateChange(appState) {
// //     if (appState === 'background') {
// //       // Schedule a notification
// //       PushNotification.localNotificationSchedule({
// //         message: 'Scheduled delay notification message', // (required)
// //         date: new Date(Date.now() + (3 * 1000)) // in 3 secs
// //       });
// //     }
// //   };

// //   sendNotification() {
// //     PushNotification.localNotification({
// //       message: 'You pushed the notification button!'
// //     });
// //   };

// //   render() {
// //     return (
// //       <View>
// //         <Button title='Press here for a notification'
// //           onPress={this.sendNotification} />
// //         <PushController />
// //       </View>
// //     );
// //   };
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center'
// //   }
// // });