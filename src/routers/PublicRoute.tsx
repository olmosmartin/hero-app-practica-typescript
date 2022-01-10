import { Redirect, Route } from "react-router-dom"

interface props {
    isAuthenticated: boolean,
    component: any,
    [rest: string]: any
}

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}:props) => {

    return (
        <Route { ...rest }
            component = { (props:any) => (
                (!isAuthenticated)? (<Component {...props} />)
                : (<Redirect to="/" />)
            )}
        />
    )
}