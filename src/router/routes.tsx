import { createBrowserRouter } from "react-router-dom";
import PageHome from "../pages/home";
import PageEvent from "../pages/event";
import PageDev from "../pages/dev";
import PageCity from "../pages/city";
import PageSignIn from "../app/signIn";

const routes = createBrowserRouter([
  { path: "/", element: <PageHome /> },
  { path: "/dev", element: <PageDev /> },
  { path: "/city", element: <PageCity /> },
  { path: "/:eventId", element: <PageEvent /> },
  { path: "/signin", element: <PageSignIn /> },
]);

export default routes;
