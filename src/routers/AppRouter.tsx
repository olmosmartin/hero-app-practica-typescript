import { useContext } from "react";
import {
    BrowserRouter as Router, Switch,
} from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";


export const AppRouter = () => {

    const { user } = useContext(AuthContext)

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        component={LoginScreen}
                        isAuthenticated={user.logged}
                        exact
                        path="/login"
                    />

                    {/*rutas a las que no se puede entrar si no esta logueado el usuario */}
                    <PrivateRoute 
                        component={DashboardRoutes}
                        isAuthenticated={user.logged}
                        path="/" 
                    />
                </Switch>
            </div>
        </Router>
    )
}
