
import { StyleSheet } from 'react-native';
import { DarkTheme } from 'react-native-paper';

    export const theme = {
    ...DarkTheme,
      roundness: 5,
      colors: {
        primary: '#92CBC5', // Color of active objects and background of buttons
        accent: '#303030',
        background: '#303030',
        surface: '#ffffff',
        text: '#ffffff', //Text within buttons and Text input 
        disabled: '#ffffff',
        placeholder: '#ffffff', //Label for Text Inputs
        backdrop : '#303030'
      }
      
      // Button: {
      //   raised: true,
      //   titleStyle: {
      //     color:'#000000',
      //     fontSize: 30
      //   },
      //   containerStyle: {
      //     width: '50%',
      //     marginTop: 20
      //   }
      // },
    };

    export const styles = StyleSheet.create({
    container: {
      flex: 1,
      //position: 'absolute',
      backgroundColor: '#303030',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });