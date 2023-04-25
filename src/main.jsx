import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Pages/Root";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
	},
	{ path: "login", element: <Login /> },
	{ path: "register/:mag_id?", element: <Register /> },
]);

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById("root")
);
