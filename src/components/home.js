import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider, Button, Text, Divider } from 'react-native-paper';
import { styles, theme } from '../../global-styles'


export default ({ history }) => (
  //TODO: Replace Text with image for logo
  // TODO: Refactor Text Styles out to separate File
  <PaperProvider theme={theme}>
    <View style={styles.container}>
      <Text style={{ color: 'red', fontSize: 100 }}>DJME</Text>
      <Divider style={{ marginTop: 100 }} />
      <Button style={{ width: '50%' }} mode="contained" onPress={() => history.push('/joinRoom')}>
        <Text style={{ fontSize: 24, color: '#000000' }}>JOIN</Text>
      </Button>
      <Button style={{ marginTop: 20, width: '50%' }} mode="contained" onPress={() => history.push('/createRoom')}>
        <Text style={{ fontSize: 24, color: '#000000' }}>CREATE</Text>
      </Button>
    </View>
  </PaperProvider>
);