import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types"

export const LoginScreen = () => {
    const history = useHistory()
    
    const { dispatch } = useContext(AuthContext);

    const handleOnClick = () => {

        const lastPath = localStorage.getItem('lastPath') || '/'

        dispatch({
            type: types.login,
            payload: {
                user:'Martin'
            }
        })
        
        // replace es para que no quede en el stack de navegacion?
        history.replace(lastPath);
        
    }

    return (
        <div className='container mt-5'>
            <h1>LoginScreen</h1>
            <hr />

            <button
                className='btn btn-primary'
                onClick={handleOnClick}
            >
                Login
            </button>
        </div>
    )
}
