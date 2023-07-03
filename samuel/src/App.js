import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./screens/Home";
import { About } from "./screens/About/About";
import { Projects } from "./screens/Projects/Projects";
import { Contacts } from "./screens/Contacts/Contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "about-me",
    element: <About />
  },
  {
    path: "projects",
    element: <Projects />
  },
  {
    path: "contact-me",
    element: <Contacts />
  },
])

const App = () => {
  return <RouterProvider router={router} />;
  
}

export default App;