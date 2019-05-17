import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Text, Button, FormLabel, FormInput, FormValidationMessage } from "react-native-elements"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // position: 'absolute',
      backgroundColor: '#303030',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default class CreateRoom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            userInput: 'sdfsdf',
        }
    }
    render() {
        // TODO: Figure out why react-native-elements form component items do not work
        return (
            <View style={styles.container}>
                <Text h1Style={{color: 'red', fontSize: 100}} h1>{this.state.userInput}</Text>
                {/* <FormLabel>Name</FormLabel> */}
                {/* <FormInput onChangeText={this.someFunction}/>
                <FormValidationMessage>Error message</FormValidationMessage> */}
                <TextInput
                    style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white'}}
                    onChangeText={(text) => this.setState({userInput: text})}
                    value={this.state.userInput}
                />
            </View>
        );
    }
}
