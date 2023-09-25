import { createBrowserRouter } from "react-router-dom";
import TestPage from "../src/pages/Test.page";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <TestPage />,
  },
]);

export { router };
