import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Formation from "../pages/formation";
import Projects from "../pages/projects";
import Expertise from "../pages/expertise";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/sobre",
        element: <About />
    },
    {
        path: "/experiencia",
        element: <Expertise />
    },
    {
        path: '/formacao',
        element: <Formation />
    },
    {
        path: '/projetos',
        element: <Projects />
    }
]);

export default Routes;