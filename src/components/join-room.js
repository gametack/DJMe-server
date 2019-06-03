import React from "react"
import { View } from 'react-native';
import { Provider as PaperProvider, Button, Text, Divider } from 'react-native-paper';
import { styles, theme } from '../../global-styles'
import { Link } from "react-router-native";

export default ({ history, currentRooms }) => (
    // TODO: Refactor Text Styles out to separate File
    <PaperProvider theme={theme}>
        <View style={styles.container}>
            <Link to="/" underlayColor="#f0f4f7" >
                <Button style={{ width: '50%' }} mode="contained" >
                    <Text style={{ fontSize: 24, color: '#000000' }}>HOME</Text>
                </Button>
            </Link>
            <Text style={{ color: 'red', fontSize: 30 }}>Current Rooms:</Text>
            <Divider style={{ marginTop: 100 }} />
            {currentRooms.map((room, index) => {
                return (
                    <Button key={index} style={{ width: '50%', marginBottom: '5%' }} mode="contained" onPress={() => { history.push('/room') }}>
                        <Text style={{ fontSize: 24, color: '#000000' }}>{room.name}</Text>
                    </Button>
                )
            })}
        </View>
    </PaperProvider>
);