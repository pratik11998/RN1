import React from 'react'
import { Text, Button } from 'react-native'
const LoginComponent = ({ navigation }) => {
    return (
        <>
            <Text>From Login Componnet</Text>
            <Button title="Open Drawer" onPress={() => navigation.openDrawer()}></Button>
        </>
    )
}

export default LoginComponent;