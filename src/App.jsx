import { Link, RouterProvider, createHashRouter } from "react-router";

export default function App() {
  const router = createHashRouter(
    [
      {
        element: (
          <div>
            <h1>Home</h1>
            <Link to="sign-in">Sign-in</Link>
            <Link to="sign-up">Sign-up</Link>
          </div>
        ),
        path: "/",
      },
      {
        element: (
          <div>
            <h1>Sign-in</h1>
            <Link to="/">Home</Link>
            <Link to="sign-up">Sign-up</Link>
          </div>
        ),
        path: "/sign-in",
      },
      {
        element: (
          <div>
            <h1>Sign-up</h1>
            <Link to="/">Home</Link>
            <Link to="sign-in">Sign-in</Link>
          </div>
        ),
        path: "/sign-up",
      },
    ]
    // { basename: "/react-router-demo" }
  );
  return <RouterProvider router={router} />;
}
