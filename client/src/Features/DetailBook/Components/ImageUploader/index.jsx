import React, { useState } from 'react';
import './styles.scss'
import { Button } from '@mui/material';
function ImageUploader({ handleChange,files }) {

  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {

    const files = event.target.files;
    const imagesArray = [...selectedImages]
    Array.from(files).forEach((file) => {
      console.log(file);
      imagesArray.push(file)
    })
    handleChange(files)
    setSelectedImages(imagesArray);
  };

  const handleImageDelete = (index) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    handleChange(selectedImages)
    setSelectedImages(updatedImages);
  };
  // async function createFile(url) {
  //   let response = await fetch(url);
  //   let data = await response.blob();
  //   let metadata = {
  //     type: 'image/jpeg'
  //   };
  //   let file = new File([data], "test.jpg", metadata);
    
  //   console.log(file);
  // }
  return (
    <div >
      <div className='preview-img'>
        {selectedImages.map((file, index) => (
          
          <div key={index} className="image-preview">
            <img src={(URL.createObjectURL(file))} alt={`Image ${index}`} />
            <Button onClick={() => handleImageDelete(index)}>Delete</Button>
          </div>
        ))}
      </div>
      <input type="file" multiple onChange={handleImageChange} />
    </div>
  );
}

export default ImageUploader;
