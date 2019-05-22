import React from "react"
import { View } from 'react-native';
import { Provider as PaperProvider, Button,  Text, Divider } from 'react-native-paper';
import {styles, theme} from './global-styles'


export default ({ history }) => (
    // TODO: Refactor Text Styles out to seperate File
    <PaperProvider theme={theme}>
        <View style={styles.container}>
            <Text style={{color: 'red', fontSize: 30}}>TO BE DEVELOPED</Text>
            <Divider style={{marginTop: 100}} />
            <Button style={{width: '50%'}}  mode="contained" onPress={() => history.push('/')}>
                <Text style={{ fontSize: 24, color:'#000000' }}>HOME</Text>
            </Button>
        </View>
    </PaperProvider>
);