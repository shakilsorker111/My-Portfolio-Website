import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import LearningJourney from "../components/LearningJourney/LearningJourney";
import About from "../components/About/About";
import Education from "../components/Education/Education";
import Details from "../components/Details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/skills",
        Component: Skills,
      },
      {
        path: "/projects",
        Component: Projects,
      },
      {
        path: "/learning",
        Component: LearningJourney,
      },
      {
        path: "/aboutMe",
        Component: About,
      },
      {
        path: "/education",
        Component: Education,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/details/:id",
        Component: Details,
      },
    ],
  },
]);
