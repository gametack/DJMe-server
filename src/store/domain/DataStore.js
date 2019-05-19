import { observable, action, computed } from 'mobx'


export default class dataStore {
    constructor() {
        console.log('Data store has been initialized')
    }

    @observable rooms = [
        {
            id: 1,
            name: 'First Room'
        }
    ]

    @action addRoom = (room) => {
        // Work flow: add an action function to add a room that would do a POST on the server
        // Preferably use async function so we can take advantage of await
        this.rooms.push(room)
    }
}