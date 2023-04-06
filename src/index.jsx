import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Home } from './components/Home';
import { Reviews } from './components/Reviews';
import { Articles } from './components/Articles';
import { Movies } from './components/Movies';
import { Movie } from './components/Movie';
import { Error } from './components/Error'
import './style.css';

const App = () => {
  return (
    <div className="container">
      <div className="content-wrap">
        <Menu />
        <main>
          <Outlet/>
        </main>
        </div>
      <footer>
        <div className="footer-text">Czechitas, React course</div>
      </footer>
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/movies",
        element: <Movies />,
        children: [
          {
            path: "/movies:id",
            element: <Movie />,
          }
        ]
      } 
    ]
  }
]);

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
