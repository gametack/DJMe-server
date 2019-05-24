import React from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider, Button, Text, TextInput } from 'react-native-paper';
import { styles, theme } from '../../global-styles'
import { observer } from "mobx-react";
import { API } from 'aws-amplify-react-native';

@observer export default class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }


    putRoom = async () => {
        // let newRoom = {
        //     id: Math.floor(Math.random() * 200),
        //     name: this.state.name,
        // }

        let newRoom = {
            body: {
              "id" : 18,
              "owner" : "Me",
              "garbage": "I am not Garbo because I have confidence in myself"
            }
        }
  
        const path = "/Rooms";

        try {
            const apiResponse = await API.put(path, newRoom);
            console.log("response from saving note: " + apiResponse);
            // this.setState({apiResponse});
            // this.props.addRoom(apiResponse);
        } catch (e) {
            console.log(e);
        }

        // this.props.addRoom(newRoom)
        // this.setState({ name: '' })
    }


    // Mark Trying something 
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
