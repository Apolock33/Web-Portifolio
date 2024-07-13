import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/sobre",
        element: <About />
    }
]);

export default Routes;