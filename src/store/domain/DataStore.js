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
        this.rooms.push(room)
    }
}