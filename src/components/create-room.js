import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider, Button, Text, TextInput } from 'react-native-paper';
import { styles, theme } from '../../global-styles'

export default class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }

    putRoom = () => {
        let newRoom = {
            id: Math.floor(Math.random() * 200),
            name: this.state.name,
        }

        this.props.addRoom(newRoom)
        this.setState({ name: '' })
    }
    render() {
        // TODO: Refactor Text Styles out to separate File
        return (
            <PaperProvider theme={theme}>
                <View style={styles.container}>
                    {/* Adding temp code for testing the store */}
                    {this.props.currentRooms.length && this.props.currentRooms.map((room, index) => {
                        return (
                            <Text key={index} style={{ fontSize: 24, color: '#000000' }}>Room Name: {room.name}</Text>
                        )
                    })}
                    <TextInput
                        style={{ width: '100%', borderWidth: 1 }}
                        label='Room Name'
                        mode='flat'
                        onChangeText={(text) => this.setState({ name: text })}
                        value={this.state.name}
                    />
                    <Button style={{ marginTop: 20, width: '45%' }} mode="contained" onPress={this.putRoom}>
                        <Text style={{ fontSize: 24, color: '#000000' }}>CREATE</Text>
                    </Button>
                    {/* TODO: Remove the back button this is only for development */}
                    <Button style={{ marginTop: 20, width: '45%' }} mode="contained" onPress={() => this.props.history.push('/')}>
                        <Text style={{ fontSize: 24, color: '#000000' }}>BACK</Text>
                    </Button>
                </View>
            </PaperProvider>
        );
    }
}
