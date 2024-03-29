import { Navigate } from "react-router-dom";

//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

//Dashboard
import Dashboard from "../pages/Dashboard";

// Event
import AddEvent from "../pages/Event/AddEvent";
import ViewEvent from "../pages/Event/ViewEvent";

// Calandar
import Calendar from "../pages/Calendar";




const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/index", component: <Dashboard /> },


    // Event
  {path: "add-event", component: <AddEvent />},
  {path:"view-event", component: <ViewEvent />},
  { path: "/apps-calendar", component: <Calendar /> },
  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  // Authentication Page
  // { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  // { path: "/forgot-password", component: <ForgetPasswordPage /> },
  // { path: "/register", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };