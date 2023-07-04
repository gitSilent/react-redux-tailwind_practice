import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import UserInfo from './Components/UserInfo/';
import ErrorPage from './Components/ErrorPage/';
import UserInfoSettings from './Components/UserInfoSettings/';
import store from './store/store';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path:"/",
    element: <UserInfo/>,
    errorElement: <ErrorPage/>
  },
  {
    path:"settings",
    element:<UserInfoSettings/>
  }
])



const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  // </React.StrictMode>
);


