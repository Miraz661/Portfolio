import {createBrowserRouter} from 'react-router-dom'
import Main from '../Components/Main/Main';
import Home from '../Components/Pages/Home';
import About from '../Components/Pages/About';
import Skills from '../Components/Pages/Skills';
import Projects from '../Components/Pages/Projects';
import Research from '../Components/Pages/Research';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },{
        path: "/skills",
        element: <Skills></Skills>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },{
        path: "/research",
        element: <Research></Research>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);