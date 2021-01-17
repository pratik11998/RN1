import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Text,View } from 'react-native'
import { LocalNotification } from '../../NotificationService';
import PushNotification from "react-native-push-notification";
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={LocalNotification}
        title="Send notifications"
      />
    </View>
  );
}

function profileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
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
      <Drawer.Navigator initialRouteName="LoginScreen" >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={profileScreen} />

      </Drawer.Navigator>
       <Button 
            icon="home" mode="outlined"
            onPress={() => { navigation.navigate('Home'); }}
        >Home</Button>
           <Button 
          icon="send" mode="outlined"
            onPress={() => { LocalNotification() }}>send Notification</Button>
      
        {/* <Text style={{color:"black" }}title="send Notification" onPress={LocalNotification}/> */}
        </Background>
   
   
          <Text title="send Notification" onPress={LocalNotification}/>
 
    </>
);
}

export default Dashboard
