/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
// import PushNotification from 'react-native-push-notification';
// PushNotification.configure({
  
//     // (required) Called when a remote or local notification is opened or received
   
//     onNotification: function(notification) {
//       console.log('LOCAL NOTIFICATION ==>', notification)
//     },
    
//   popInitialNotification: true,
//     //requestPermissions: true
//     requestPermissions: Platform.OS === 'ios',
//   })
import PushNotification from "react-native-push-notification";

 // Must be outside of any component LifeCycle (such as `componentDidMount`).
 PushNotification.configure({
    // (required) Called when a remote or local notification is opened or received
    onRegister:function(token){
        console.log('token',token)
    },
    onNotification: function(notification) {
      console.log('LOCAL NOTIFICATION ==>', notification)
    },
    permissions:{
        alert:true,
        badge:true,
        sound:true,
    },
  
    popInitialNotification: true,
    requestPermissions: Platform.OS === 'ios',
  })
AppRegistry.registerComponent(appName, () => App);
