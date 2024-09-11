import { createBrowserRouter, RouterProvider } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  const router = createBrowserRouter([
    { 
      path: "/",
      element: <IndexPage />,
    },
    {
      path: "/blogs",
      element: <Blogs />
    },
    {
      path: "/about-us",
      element: <About />
    },
    {
      path: "/contact-us",
      element: <Contact />
    }
  ]);

  return <RouterProvider router={router} />
}