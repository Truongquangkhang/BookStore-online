const express = require('express')
const admin = require('firebase-admin')
const credentials = require('./key.json')
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
admin.initializeApp({
    Credential: admin.credentials.cert(credentials)
});
const db = admin.firestore();
const port = 3000


app.post("/create", async (req, res) => {
    const id = req.body.time;
    const itude = {
        time: req.body.time,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    }
    const response = db.collection("users").doc(id).set(itude);
    res.send(response)
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })