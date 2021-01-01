import React from 'react';
import { Button, View } from 'react-native';

const CustomDrawerContent = ({ navigation }) => {
    return (
        <View >
            <Button
                style={{ backgroundColor: 'red' }}
                title="Go somewhere"
                onPress={() => { navigation.navigate('SomeScreen'); }}
            />
            <Button
                title="Home"
                onPress={() => { navigation.navigate('Home'); }}
            />
        </View>
    );
}
export default CustomDrawerContent;