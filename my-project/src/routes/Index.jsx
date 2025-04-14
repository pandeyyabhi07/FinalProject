import AdminRoute from "./admin/Index";
import MemberRoute from "./member/Index";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  AdminRoute,
  MemberRoute,
])

export default router