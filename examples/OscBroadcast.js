/* eslint-disable no-console */

'use strict'
const { Client, Message } = require('node-osc')
const express = require('express');
var bodyParser = require('body-parser')

const app = express();
const port = 3000;
var jsonParser = bodyParser.json()


app.post('/blendsin', jsonParser,(req, res) => {
  //console.log(req.body.blendShapes)
  for (let i = 0; i < Object.keys(req.body.blendShapes).length; i++) {
    UpdateShapes(i,Object.values(req.body.blendShapes)[i])
 }
  res.sendStatus(200);
})

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});

function UpdateShapes(index, value){

  //console.log(value)
  let client = new Client('127.0.0.1', 3333)
  let message = new Message('/W')
  message.append(index)
  message.append(value)
  client.send(message, (err) => {
    if (err) {
      console.error(new Error(err))
    }
    client.close()
    //console.log(message)
  })
}