import './App.css';
import Landing from './pages/Landing';
import { createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import Map from './pages/Map'
import NavBar from './components/NavBar';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/mapa",
      element: <Map />
    }
  ])
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  )
}




export default App;
