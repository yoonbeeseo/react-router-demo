import { RouterProvider, createBrowserRouter } from "react-router";

export default function App() {
  const router = createBrowserRouter(
    [
      {
        element: (
          <div>
            <h1>Home</h1>
          </div>
        ),
        path: "/",
      },
      {
        element: (
          <div>
            <h1>Sign-in</h1>
          </div>
        ),
        path: "/sign-in",
      },
      {
        element: (
          <div>
            <h1>Sign-up</h1>
          </div>
        ),
        path: "/sign-up",
      },
    ],
    { basename: "/react-router-demo" }
  );
  return <RouterProvider router={router} />;
}
