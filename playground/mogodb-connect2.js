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
  // db.collection('ToDos').find({
  //   completed: false
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Unable to connect to mongo');
  //
  // });

  // db.collection('ToDos').find({
  //   completed: false
  // }).count().then((count) => {
  //   console.log('Todos');
  //   console.log("Count:", count);
  // }, (err) => {
  //   console.log('Unable to connect to mongo');
  //
  // });
  db.collection('Users').find({
    name: "hello"
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to connect to mongo');

  });
  // client.close();
});