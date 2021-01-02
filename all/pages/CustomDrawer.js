import React from 'react';
import {  View ,Text} from 'react-native';
import { Button} from 'react-native-paper';
import { LocalNotification } from '../NotificationService';

const CustomDrawerContent = ({ navigation }) => {
    return (
        <>
        <View >
          
            <Button 
                icon="home" mode="outlined"
                onPress={() => { navigation.navigate('Home'); }}
            >Home</Button>
               <Button 
              icon="send" mode="outlined"
                onPress={() => { LocalNotification(); navigation.closeDrawer() }}>send Notification</Button>
          
            {/* <Text style={{color:"black" }}title="send Notification" onPress={LocalNotification}/> */}
        </View>
        <View style={{color:"black" }}>
              <Text title="send Notification" onPress={LocalNotification}/>
        </View>
        </>
    );
}
export default CustomDrawerContent;