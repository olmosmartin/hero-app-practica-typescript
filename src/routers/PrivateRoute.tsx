import { Redirect, Route } from "react-router-dom"
//import PropTypes from 'prop-types'

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

/*
PrivateRoute.prototypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
*/