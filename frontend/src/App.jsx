import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import About from "../page/About/About";
import Board from "../page/Board/Board";
import Contact from "../page/Contact/Contact";
import Leadership from "../page/Leadership/Leadership";
import MainPage from "../page/MainPage/MainPage";
import Services from "../page/Services/Services";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/leadership",
        element: <Leadership />
      },
      {
        path: "/board",
        element: <Board />
      },
      {
        path: "/our-services",
        element: <Services />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
