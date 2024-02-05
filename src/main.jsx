import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./components/routes/root";
import Home from "./components/HomeAll/Home/Home";
import Classrooms from "./components/ClassroomsAll/Classrooms/Classrooms";
import Faculty from "./components/FacultyAll/Facultys/Faculty";
import About from "./components/About/About";
import MinAbout from "./components/About/minAbout/MinAbout";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
        loader:()=> fetch('classroom.json'),
        children: [
          {
            path: "/",
            element: <MinAbout></MinAbout>,
          }
        ]
      },
      {
        path: "/classrooms",
        element: <Classrooms></Classrooms>,
        loader:()=> fetch('classroom.json'),
      },
      {
        path: "/faculty",
        element:<Faculty></Faculty>,
      },
      {
        path: "about",
        element: <About></About>,
        loader:()=> fetch('about.json'),
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
