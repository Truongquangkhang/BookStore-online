import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FormAddAuthor from './Components/Form_Control/FormAddAuthor';
import FormAddCategory from './Components/Form_Control/FormAddCategory';
import Login from './Components/Login';
import MainLayout from './Components/MainLayout/index';
import BookList from './Components/TestRedux';
import AddBook from './Features/AddBook';
import Books from './Features/Books';
import DetailBook from './Features/DetailBook';
import Register from './Features/Register';
import Todo from './Features/ToDo';

import Profile from './Features/Profile';
import ReadingBook from './Features/ReadingBook';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/book",
        element:<Books/>,
      },
      {
        path: "/book/:idbook",
        element: <DetailBook />
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register />
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
        path: '/user/profile',
        element: <Profile />
      },
      {
        path: '/view',
        element: <ReadingBook />
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
