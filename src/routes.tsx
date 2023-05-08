import {
  Route,
  RootRoute,
  Router,
  Outlet,
  RouterProvider,
} from "@tanstack/router";
import PageHome from "./app/home";
import PageCity from "./app/city";
import PageSignIn from "./app/signIn";
import PageEvent from "./app/event";
import PageInstructions from "./app/instructions";
import PageRegister from "./app/register";

function Root() {
  return <Outlet />;
}

const rootRoute = new RootRoute({
  component: Root,
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: PageHome,
});

const cityRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "city",
  component: PageCity,
});

const signInRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "signin",
  component: PageSignIn,
});

const eventRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "$eventId",
  component: PageEvent,
});

const instructionsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "instructions/$eventId",
  component: PageInstructions,
});

const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "register/$eventId",
  component: PageRegister,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  cityRoute,
  signInRoute,
  eventRoute,
  instructionsRoute,
  registerRoute,
]);

const router = new Router({ routeTree });

declare module "@tanstack/router" {
  interface Register {
    router: typeof router;
  }
}

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
