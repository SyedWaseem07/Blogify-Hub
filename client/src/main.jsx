import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from"./components/Layout"
import ErrorPage from "./pages/ErrorPage"

import Home from "./pages/Home"
import PostDetails from "./pages/PostDetails"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import UserProfile from "./pages/UserProfile"
import Authors from "./pages/Authors"
import AuthorPosts from "./pages/AuthorPosts"
import CreatePost from "./pages/CreatePost"
import EditPost from "./pages/EditPost"
import DeletePost from "./pages/DeletePost"
import CategoryPost from "./pages/CategoryPost"
import DashBoard from "./pages/DashBoard"
import UserProvider from "./context/UserContext"
import './index.css'



const router = createBrowserRouter([
    {
        path: "/",
        element: <UserProvider> <Layout /> </UserProvider>,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <Home />},
            {path: "posts/:id", element: <PostDetails />},
            {path: "register", element: <Register />},
            {path: "login", element: <Login />},
            {path: "profile/:id", element: <UserProfile />},
            {path: "authors", element: <Authors />},
            {path: "create", element: <CreatePost />},
            {path: "posts/:id/edit", element: <EditPost />},
            {path: "posts/:id/delete", element: <DeletePost />},
            {path: "posts/categories/:category", element: <CategoryPost />},
            {path: "posts/user/:id", element: <AuthorPosts />},
            {path: "dashboard/:id", element: <DashBoard />},
            {path: "logout", element: <Logout />},
        ]
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
