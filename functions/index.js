const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.onDataAdded = functions.database
  .ref("/users/admin/switches/{id}/state")
  .onWrite((change, context) => {

    console.log(change.after.val());
  });
