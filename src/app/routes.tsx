import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import WorksPage from "../pages/WorksPage";
import OffersPage from "../pages/OffersPage";
import ContactsPage from "../pages/ContactsPage";
import NotFoundPage from "../pages/NotFoundPage";
import ServiceDetailPage from "../pages/ServiceDetailPage";

export const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/about", Component: AboutPage },
  { path: "/services", Component: ServicesPage },
  { path: "/services/:slug", Component: ServiceDetailPage },
  { path: "/works", Component: WorksPage },
  { path: "/offers", Component: OffersPage },
  { path: "/contacts", Component: ContactsPage },
  { path: "*", Component: NotFoundPage },
]);
