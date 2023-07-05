const firebase = require('../Firebase/firebase')
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");


const createFileName = (originalname, type) => {
  let filename = type + "-" + Date.now() + "-" + originalname
  return filename

}
const uploadFiletoFireBase = async (files) => {
  const storage = getStorage(firebase.app)
  var filesname = {
    pdf: [],
    image: []
  }
  for (const file of files) {
    let storageRef
    let type = 'image'
    if (file.mimetype === 'application/pdf') {
      storageRef = ref(storage, createFileName(file.originalname, 'pdf'));
      type = 'pdf'
    }
    else {
      storageRef = ref(storage, createFileName(file.originalname, 'image'));
    }

    const metadata = {
      contentType: file.mimetype
    };

    await uploadBytes(storageRef, new Uint8Array(file.buffer), metadata);

    const imageUrl = await getDownloadURL(storageRef);
    filesname[type].push(imageUrl.toString());
  }

  return filesname

}

module.exports.ValidationCreateBook = (async (req, res, next) => {
  // if (req.file) {
  //   console.log(req.file);
  //   const filePDF = await uploadFiletoFireBase(req.file)
  //   req.body.file = filePDF.pdf
  // }
  if (!req.files || req.files.length === 0) {
    res.status(400).send('No files uploaded');
    return;
  }

  try {
    const filesname = await uploadFiletoFireBase(req.files)
    console.log(filesname);
    req.body.author = req.body.author.split(',')
    req.body.category = req.body.category.split(',')
    req.body.images = filesname.image
    req.body.file = filesname.pdf[0].toString()
    console.log(filesname);

    next()


  } catch (error) {
    res.status(400).json({ err: error })
  }
})
