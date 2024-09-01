import { BrowserRouter, useRoutes} from "react-router-dom";
import * as Page from "./pages"
function Routes() {
    return useRoutes([
        {
            path: "/",
            element: <Page.Visitor.Home />
        }
    ])
}
export default function Router() {
    return (<BrowserRouter>
        <Routes />
    </BrowserRouter>)
}
 