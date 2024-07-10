import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import {
  HomeLayout,
  Landing,
  About,
  Deals,
  Result,
  Users,
  Gallery,
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: 'true',
        element: <Landing />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'deals',
        element: <Deals />,
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'result',
        element: <Result />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
