import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import BookDetails from './Components/BookDetails/BookDetails.jsx';
import PagesToRead from './Components/PagesToRead/PagesToRead.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/listedbooks',
        element: <ListedBooks></ListedBooks>
      },
      {
        path: '/bookdetails/:bookId',
        element: <BookDetails></BookDetails>,
        loader: () => fetch('books.json'), 
      },
      {
        path: '/pagestoread',
        element: <PagesToRead></PagesToRead>
      }
    ]
  }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
) 