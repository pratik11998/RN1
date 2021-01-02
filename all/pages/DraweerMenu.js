import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginComponent from './LoginComponent'
import HomeComponent from './HomeComponent'
import CustomDrawer from "./CustomDrawer";


const Drawer = createDrawerNavigator();

const DraweerMenu = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator 
            drawerContent={(props) => <CustomDrawer {...props} />}>
                <Drawer.Screen name="Login" component={LoginComponent} />
                <Drawer.Screen name="Home" component={HomeComponent} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
export default DraweerMenu;