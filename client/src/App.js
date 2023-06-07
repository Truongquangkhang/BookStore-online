import Books from './Features/Books';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Components/MainLayout/index';
import DetailBook from './Features/DetailBook';
import Todo from './Features/ToDo';
import BookList from './Components/TestRedux';
import AddBook from './Features/AddBook';
import FormAddAuthor from './Components/Form_Control/FormAddAuthor';
import FormAddCategory from './Components/Form_Control/FormAddCategory'
import TestUploadFile from './Components/Form_Control/UploadFile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/book",
        element:<Books/>,
        children: [
          {
            path: ':idbook',
            element: <DetailBook />
          }
        ]
      },
      {
        path: '/form',
        element: <Todo></Todo>
      },
      {
        path: '/redux',
        element: <BookList></BookList>
      },
      {
        path: '/book/add',
        element: <AddBook />
      },
      {
        path: '/author/add',
        element: <FormAddAuthor />
      },
      {
        path: '/category/add',
        element: <FormAddCategory />
      },
      {
        path: '/test/add',
        element: <TestUploadFile />
      }

    ]
  },

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
