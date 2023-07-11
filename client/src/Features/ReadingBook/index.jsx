import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import { useParams } from 'react-router-dom';
import apiBook from '../../API/apiBook';
import './styles.scss';


function ReadingBook() {
  pdfjs.GlobalWorkerOptions.workerSrc =
        `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [URL, setURL] = useState()
  const { idbook } = useParams()
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  // const Content = useSelector((state) => state.Content.data)
  // const dispatch = useDispatch()


  // useEffect(() => {
  //   dispatch(actions.getContent.getContentRequest(idbook))
  // }, [dispatch, idbook])
  React.useEffect(() => {
    const getBook = async () => {
      const book = await apiBook.detailBook(idbook)
      const temp = `https://cors-anywhere.herokuapp.com/${book.data.file}`
      setURL(temp)
    }
    getBook()
  }, [idbook])

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
      {
        URL ? <header className="container_pdf">
          <div>
            {pageNumber > 1 &&
              <Button onClick={changePageBack}>Previous Page</Button>
            }
          </div>

          <Document file={URL} onLoadSuccess={onDocumentLoadSuccess} className='pdf'>
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

        </header> :
          <h2>Loading Content</h2>
      }

    </div>
  );
}


export default ReadingBook