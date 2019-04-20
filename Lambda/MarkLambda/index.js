'use strict';
console.log('Loading function');



exports.handler = (event) => {
    
var pg = require('pg');

var conString = "postgres://Garbo:NotToken@NotURL";

var client = new pg.Client(conString);
var testFlag = 0;
console.log("Starting Connect")
client.connect((err) => {
        if (err) {
            console.log("BOO");
            testFlag = 1;
            throw err;
        }
        testFlag = 2;
        console.log("Connected!");
        });
console.log("Ending Connect")

    const text = 'INSERT INTO public."Room"("RoomCode", "Name", "Owner", "Private", "Password", "ApprovalSetting", "Provider", "QueueId", "Members", "Location", "Image", "Genres", "PrioritySetting", "ProviderPlaylistId") VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)'
    const values = ['123', 'roasted-Ham', '1', 'True', 'ABC', 'True', 'Spotify', '123', '{123,123}', '123', 'picture.png', '{Rock}', 'FIFO', '123']
    client.query(text, values, (err, res) => {
        if (err) {
            console.log(err.stack)
            //callback(err, "Failure?");
        } else {
            console.log(res.rows[0])
            return "Hello"
            //callback(null, "Success?");
        }
        })
//console.log(client)

}
