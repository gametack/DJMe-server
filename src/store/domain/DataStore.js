import { observable, action, decorate } from 'mobx'


class DataStore {
    constructor() {
        console.log('Data store has been initialized')
    }

    rooms = [
        {
            id: 1,
            name: 'First Room'
        }
    ]

    addRoom = (room) => {
        this.rooms.push(room)
    }
}
decorate(DataStore, {
    rooms: observable,
    addRoom: action,
})
export default DataStore