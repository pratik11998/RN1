import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { createDrawerNavigator } from '@react-navigation/drawer';
import auth from '@react-native-firebase/auth';
import { Text,View } from 'react-native'
import { LocalNotification } from '../../NotificationService';
import PushNotification from "react-native-push-notification";
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
const usersCollection = firestore().collection('Users');
  
const signout = () => {
  auth()
  .signOut()
  .then(() => {console.log('User signed out!');
  navigation.reset({
    index: 0,
    routes: [{ name: 'Dashboard' }],
  })
})
}
const adddata = () => {
  
  // console.log(usersCollection);
}
async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
  }
}
const Drawer = createDrawerNavigator();
const Dashboard = ({ navigation }) => {
  PushNotification.getChannels(function (channel_ids) {
         console.log(channel_ids); // ['channel_id_1']
       });
  // <Background>
  //   <Logo />
  //   <Header>Let’s start</Header>
  //   <Paragraph>
  //     Your amazing app starts here. Open you favorite code editor and start
  //     editing this project.
  //   </Paragraph>
  //   <Button
  //     mode="outlined"
  //     onPress={() =>
  //       navigation.reset({
  //         index: 0,
  //         routes: [{ name: 'StartScreen' }],
  //       })
  //     }
  //   >
  //     Logout
  //   </Button>
  // </Background>

  return (
    <>
   
  
    <Background>
    <Button 
            icon="add" mode="outlined"
            onPress={requestUserPermission}
        >Add</Button>
       <Button 
            icon="home" mode="outlined"
            onPress={signout}
        >SignOut</Button>
           <Button 
          icon="send" mode="outlined"
            onPress={() => { LocalNotification() }}>send Notification</Button>
      
       
        </Background>
   
   
          <Text title="send Notification" onPress={LocalNotification}/>
 
    </>
);
}

export default Dashboard
