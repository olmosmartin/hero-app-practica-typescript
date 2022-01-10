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

    

    return (
        <Route { ...rest }
            component = { (props:any) => (
                (isAuthenticated)? (<Component {...props} />)
                : (<Redirect to="/login" />)
            )}
        />
    )
}