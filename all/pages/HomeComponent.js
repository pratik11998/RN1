import React from 'react'
import { Text, Button } from 'react-native'
const HomeComponent = ({ navigation }) => {
    return (
        <>
            <Text>From Home Componnet</Text>
            <Button title="Open Drawer" onPress={() => navigation.openDrawer()}></Button>
            <Button title="Notification" onPress={() => navigation.openDrawer()}></Button>
        </>
    )
}

export default HomeComponent;