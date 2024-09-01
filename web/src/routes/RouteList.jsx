import { useRoutes } from "react-router-dom";
// import Visitor from "../pages/Visitor";
import { Home, About, Courses, Contact, Policy, FAQ, User,Admin } from "../pages";
import StopWatch from "../pages/StopWatch"
import * as Layout from "../layout";
export default function RouteList() {
	return useRoutes([
		{
			path:"/admin",
			element:<Layout.Admin />,
			children:[
				{path:"/admin/category",element:<Admin.Category/>},
				{path:"/admin/course",element:<Admin.Course/>},
			]
		},
		{
			path: "/",
			element: <Layout.Visitor />,
			children: [
				{ path: "/", element: <Home /> },
				{ path: "/about", element: <About /> },
				{ path: "/courses", element: <Courses /> },
				{ path: "/contact", element: <Contact /> },
				{ path: "/policy", element: <Policy /> },
				{ path: "/policy/:policy", element: <Policy /> },
				{ path: "/faq", element: <FAQ /> },
				{ path: "/stop-watch", element: <StopWatch /> },
				{
					path: "user/",
					children: [
						{ path: "login/", element: <User.Login /> },
						{ path: "register/", element: <User.Register /> },
					],
				},
			],
		},
	]);
	/* return (
		<Routes>
			<Route path="/" element={<Visitor />}>
                <Route index element={<Home />} />
			    <Route path="*" element={<Home />} />
            </Route>
		</Routes>
	); */
}
