const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.onDataAdded = functions.database
  .ref("/users/admin/switches/{id}/state")
  .onWrite((change, context) => {
    const data = change.after.val();
    console.log("returning promise to set date switched on");
    return change.after.ref.parent.child("activatedAt").set(new Date().getTime()); //date to string needed
  });
