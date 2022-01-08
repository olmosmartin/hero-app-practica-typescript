import {
    BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login"> <LoginScreen /> </Route>
                    <Route path="/"> <DashboardRoutes /> </Route>
                </Switch>
            </div>
        </Router>
    )
}
