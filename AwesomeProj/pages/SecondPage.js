import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Text,Button} from 'react-native';
//import all the components we are going to use.
import Camera from 'react-native-camera';
export default class SecondPage extends Component {
  takePicture() {  
    this.camera    
    .capture()    
    .then((data) => console.log(data))    
    .catch(err => console.error(err));}
  static navigationOptions = {
    title: 'Second Page',
    //Sets Header text of Status Bar
    headerStyle: {
      backgroundColor: '#f4511e',
      //Sets Header color
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      
      <View style={styles.container}>
        <Camera  ref={cam => {this.camera = cam}}  style={styles.preview}  aspect={Camera.constants.Aspect.fill}>  <Text style={styles.capture} onPress={this.takePicture.bind(this)}>    [CAPTURE]  </Text></Camera>
      <Text>profile</Text>
        <Button title='Logout' onPress={() =>navigate('ThirdPage')}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },preview: {  flex: 1,  justifyContent: 'flex-end',  alignItems: 'center',  height: Dimensions.get('window').height,  width: Dimensions.get('window').width},  capture: {    flex: 0,    backgroundColor: '#fff',    borderRadius: 5,    color: '#000',    padding: 10,    margin: 40    }},
);