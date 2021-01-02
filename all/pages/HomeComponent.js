import React from 'react'
import { Text,View } from 'react-native'
import { Button} from 'react-native-paper';
import { LocalNotification } from '../NotificationService';
const HomeComponent = ({ navigation }) => {
    return (
        <>
            <Text>From Home Componnet</Text>
            <View>
            <Button icon="tag" mode="contained" raised theme={{roundness:10}} color="black" onPress={() => navigation.openDrawer()}>Open Drawer</Button>
            <Button icon="send" mode="outlined"  raised theme={{ roundness: 10 }}   color="black" title="Notification" onPress={LocalNotification}>Send Notification</Button>
            </View>
        </>
    )
}

export default HomeComponent;