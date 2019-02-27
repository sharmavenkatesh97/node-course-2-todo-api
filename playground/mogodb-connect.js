// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MOngoDb server');
  }
  console.log('connected to Mongo Server');
  const db = client.db('TodoApp');

  db.collection("ToDos").insertOne({
    text: 'Something to be typed here',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('Unable to write to Mongo');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));

  });

  db.collection('Users').insertOne({
    name: "venky",
    age: 21,
    loacation: "punjab"
  }, (err, result) => {
    if (err) {
      return console.log('unable to write to mongo');
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  client.close();
});