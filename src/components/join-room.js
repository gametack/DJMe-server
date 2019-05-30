import React from "react"
import { View } from 'react-native';
import { Provider as PaperProvider, Button, Text, Divider, TextInput } from 'react-native-paper';
import { styles, theme } from '../../global-styles'
import { observer } from "mobx-react";
import { Link } from "react-router-native";
import { API } from 'aws-amplify';


@observer export default class JoinRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roomId: '',
        }
    }
    // API.get(apiName, path, myInit)
    //     .then(response => {
    //         // Add your code here
    //     })
    //     .catch(error => {
    //         console.log(error.response)
    //     })

    getRoom = async () => {

        const path = "/Rooms/" + this.state.roomId;
        console.log(path);

        try {
            const apiResponse = await API.get("DJMe", path);
            console.log("response from GET room: " + apiResponse);
            // this.setState({apiResponse});
            // this.props.addRoom(apiResponse);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
    // TODO: Refactor Text Styles out to separate File
        return (
            <PaperProvider theme={theme}>
                <View style={styles.container}>
                    <Link to="/" underlayColor="#f0f4f7" >
                        <Button style={{ width: '50%' }} mode="contained" >
                            <Text style={{ fontSize: 24, color: '#000000' }}>HOME</Text>
                        </Button>
                    </Link>
                    <TextInput
                        style={{ width: '100%', borderWidth: 1 }}
                        label='Room Name'
                        mode='flat'
                        onChangeText={(text) => this.setState({ roomId : text })}
                        value={this.state.roomId}
                    />
                    <Button style={{ marginTop: 20, width: '45%' }} mode="contained" onPress={this.getRoom}>
                        <Text style={{ fontSize: 24, color: '#000000' }}>JOIN</Text>
                    </Button>
                    {/* <Divider style={{ marginTop: 100 }} />
                    {currentRooms.map((room, index) => {
                        return (
                            <Button key={index} style={{ width: '50%', marginBottom: '5%' }} mode="contained" onPress={() => { console.log(`Call join function with room id: ${room.id}`) }}>
                                <Text style={{ fontSize: 24, color: '#000000' }}>{room.name}</Text>
                            </Button>
                        )
                    })} */}
                </View>
            </PaperProvider>
        )//end of return
    } //end of render()
}