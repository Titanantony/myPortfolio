import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './App.css'
//Layout
import RootLayout from './Layout/RootLayout'

// Pages
import Portfolio from './website/Portfolio'
import MyBlog from './Blog/Blog'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Portfolio />} />
      <Route path='myBlog' element={<MyBlog />}></Route>
    </Route>,
  ),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
