import React, { useEffect, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import * as actions from '../../Redux/Actions'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './styles.scss'
import { Button } from '@mui/material';
function ReadingBook() {
  const { idbook } = useParams()
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const Content = useSelector((state) => state.Content.data)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(actions.getContent.getContentRequest(idbook))
  }, [dispatch, idbook])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1)
  }

  function changePageNext() {
    changePage(+1)
  }



  return (
    <div>
      <header className="container_pdf">
        <div>
          {pageNumber > 1 &&
            <Button onClick={changePageBack}>Previous Page</Button>
          }
        </div>

        <Document file={Content} onLoadSuccess={onDocumentLoadSuccess} className='pdf'>
          <Page pageNumber={pageNumber} />
          <Page pageNumber={pageNumber + 1} />
        </Document>

        {/* <p> Page {pageNumber} of {numPages}</p> */}
        <div>
          {
            pageNumber < numPages &&
            <Button onClick={changePageNext}>Next Page</Button>
          }
        </div>

      </header>
    </div>
  );
}


export default ReadingBook