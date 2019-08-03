const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// Basic Hello World test function
exports.helloWorld = functions.https.onRequest((request, response) => {
response.send("Hello World!");
});

// Get all documents from the screams collection
exports.getScreams = functions.https.onRequest((req, resp) => {
  admin.firestore().collection('screams').get().then(data => {
    let screams = [];
    data.forEach(doc => {
      screams.push(doc.data());
    });
    return resp.json(screams);
  })
  .catch(err => console.error(err));
});

// Add a document to the screams collection
exports.createScream = functions.https.onRequest((req, resp) => {
  const newScream = {
    body: req.body.body,
    userHandle: req.body.userHandle,
    createdAt: admin.firestore.Timestamp.fromDate(new Date())
  };
  
  admin.firestore().collection('screams').add(newScream)
      .then(doc => {
        resp.json({message: `document ${doc.id} created successfully`});
  })
      .catch(err => {
        resp.status(500).json({error: 'something went wrong'});
        console.error(err);
      });
});
