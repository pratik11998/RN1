import React from 'react';
import { StyleSheet, Text, View,TextInput,Button} from 'react-native';

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Login',
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
 
  state={
    email:null,
    password:null
  }
    Loginfu(){
 const { navigate } = this.props.navigation;
   
        navigate('FirstPage');
    
      }


 
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
       <View style={styles.inputView} >
       <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
            </View>
       <View style={styles.inputView} >
       <TextInput  
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
       </View>
      <Button style={styles.loginBtn} title="Login" onPress={ this.Loginfu.bind(this) }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});