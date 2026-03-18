import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ArticleList from './components/ArticlesList.jsx'
import ReadArticle from './components/ReadArticle.jsx'


const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <ArticleList />
  },
  {
    path: "/:id",
    element: <ReadArticle />
  }
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={browserRouter}>
      <App />
    </RouterProvider>
    ,
)
