import * as React from 'react';
import DraweerMenu from './pages/DraweerMenu'
import HomeComponent from './pages/HomeComponent';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

const App = () => {
  return (
 // <DraweerMenu/>
  
  
      <DraweerMenu/>
   
  );
}
export default App;
