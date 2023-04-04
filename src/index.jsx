import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Home } from './components/Home';
import { Reviews } from './components/Reviews';
import { Articles } from './components/Articles';
import { Movies } from './components/Movies';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <Menu />
      <main>
        <Outlet/>
      </main>
      <footer>
        <p>Czechitas, React course</p>
      </footer>
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
      }
    ]
  }
]);

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
