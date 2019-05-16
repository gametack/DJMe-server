import Amplify from "aws-amplify";
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withAuthenticator } from 'aws-amplify-react-native';
import awsConfig from "./aws-exports";
import { ThemeProvider, Button, Text } from 'react-native-elements';

Amplify.configure(awsConfig);

const theme = {
  colors: {
    primary: '#92CBC5',
    secondary: '#000000'
  },
  Button: {
    raised: true,
    titleStyle: {
      color:'#000000',
      fontSize: 30
    },
    containerStyle: {
      width: '50%',
      marginTop: 20
    }
  },
};

class App extends React.Component {
  render() {
    return (
      //TODO: Replace Text with image for logo
      <View style={styles.container}>
      <ThemeProvider theme={theme}>
        <Text h1Style={{color: 'red', fontSize: 100}} h1>DJME</Text>
        <Button containerStyle={{marginTop: 100}} title="JOIN" />
        <Button containerStyle={{width: '35%'}}title="CREATE" />
      </ThemeProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: '#303030',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App);