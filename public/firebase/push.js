const admin = require("firebase-admin");
const serviceAccount = require("YOURNAME");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Specify your Firestore collection reference
const collectionRef = admin.firestore().collection("censusNew");

// Load your JSON file
const jsonData = require("./csvjson.json");

// Ensure jsonData is an array
const dataArray = Array.isArray(jsonData) ? jsonData : [jsonData];

// Add documents to the collection
async function addDocuments() {
  for (const document of dataArray) {
    try {
      await collectionRef.add(document);
      console.log("Document added successfully:", document);
    } catch (error) {
      console.error("Error adding document:", error);
    }
  }

  console.log("All documents added.");
  process.exit(0);
}

addDocuments();
