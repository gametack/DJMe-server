import React from "react"
import { StyleSheet, View } from 'react-native';
import { Text, Button } from "react-native-elements"

export default ({ history }) => (
    <View>
        <Text h1Style={{color: 'red', fontSize: 100}} h1>Create FORM</Text>
        <Button containerStyle={{marginTop: 100}} title="GO BACK" onPress={() => history.push("/")} />
    </View>
);