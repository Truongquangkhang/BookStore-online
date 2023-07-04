import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import filePDF from './sample.pdf'
import apiBook from '../../API/apiBook';
import { Button } from '@mui/material';
function ReadingBook() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }

  const [temppdf, settemppdf] = useState()


  

  const temp = async () => {
    const PDF = await apiBook.getPDFOfBook('ddd')
    settemppdf(PDF)
    console.log('1', PDF);
  }
  

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handlerClick = useCallback(()=>{
    temp()
  })
  return (
    <div>
      <Button onClick={handlerClick}>Click me</Button>
      {temppdf ? <header className="App-header">
        <Document file={temppdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p> Page {pageNumber} of {numPages}</p>
        { pageNumber > 1 && 
        <button onClick={changePageBack}>Previous Page</button>
        }
        {
          pageNumber < numPages &&
          <button onClick={changePageNext}>Next Page</button>
        }
      </header> : <div></div>}
    </div>
  );
}


export default ReadingBook