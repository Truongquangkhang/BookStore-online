const admin = require('firebase-admin')
const { initializeApp } =require('firebase/app');
const {getAuth} = require('firebase/auth')

const key = require('./bookshop-ba141-firebase-adminsdk-6p9bw-cf1de6c675.json')
// Initialize firebase admin SDK
// admin.initializeApp({
//   credential: admin.credential.cert(key),
//   storageBucket: "gs://bookstore-96a50.appspot.com"
// })


const app = initializeApp(key)
// const auth = getAuth(app)


module.exports = {
  app
}
