import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider, Button, Text } from 'react-native-elements';

// TODO: Extract this theme into a seperate .js file and export it and then use it everywhere
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

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // position: 'absolute',
      backgroundColor: '#303030',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default ({ history }) => (
 //TODO: Replace Text with image for logo
    <View style={styles.container}>
        <ThemeProvider theme={theme}>
            <Text h1Style={{color: 'red', fontSize: 100}} h1>DJME</Text>
            <Button containerStyle={{marginTop: 100}} title="JOIN" onPress={() => history.push('/joinRoom')} />
            <Button containerStyle={{width: '35%'}}title="CREATE" onPress={() => history.push('/createRoom')}/>
        </ThemeProvider>
    </View>
);