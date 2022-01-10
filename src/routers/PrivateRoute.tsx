import { Redirect, Route } from "react-router-dom"

interface props {
    isAuthenticated: boolean,
    component: any,
    [rest: string]: any
}

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}:props) => {

    // en rest.location.pathname está la ruta que se está ahora
    localStorage.setItem('lastPath', rest.location.pathname)

    return (
        <Route { ...rest }
            component = { (props:any) => (
                (isAuthenticated)? (<Component {...props} />)
                : (<Redirect to="/login" />)
            )}
        />
    )
}