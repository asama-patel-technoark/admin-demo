import React, { useState } from 'react'

const FileUploadPage = () => {
  const [selectedFile, setSelectedFile] = useState()
  const [isFilePicked, setIsFilePicked] = useState(false)

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0])
    setIsFilePicked(true)
  }

  const handleSubmission = () => {
    const formData = new FormData()

    formData.append('File', selectedFile)

    fetch('https://idg-plumbing.herokuapp.com/v1/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response)
      .then((result) => {
        console.log('Success', result)
      })
      .catch((error) => {
        console.log('Error', error)
      })
  }

  return (
    <div>
      <input type='file' name='file' onChange={changeHandler} />
      {isFilePicked ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate:{' '}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  )
}

export default FileUploadPage
