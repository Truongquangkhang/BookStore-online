const firebase = require('../Firebase/firebase')
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");


const createFileName = (originalname) => {
  let filename = "image-" + Date.now() + "-" + originalname
  return filename

}
const uploadFiletoFireBase = async(files) => {
  const storage = getStorage(firebase.app)
  var filesname = [];
  for (const file of files) {
    const storageRef = ref(storage, createFileName(file.originalname));
    const metadata = {
      contentType: file.mimetype
    };

    await uploadBytes(storageRef, new Uint8Array(file.buffer), metadata);

    const imageUrl = await getDownloadURL(storageRef);
    filesname.push(imageUrl.toString());
  }

  return filesname

}

module.exports.ValidationCreateBook = (async (req, res, next) => {
  if (!req.files || req.files.length === 0) {
    res.status(400).send('No files uploaded');
    return;
  }

  try {
    const filesname = await uploadFiletoFireBase(req.files)
    req.body.author = req.body.author.split(',')
    req.body.category = req.body.category.split(',')
    req.body.images = filesname
    

    next()


  } catch (error) {
    res.status(400).json({ err: error })
  }
})
