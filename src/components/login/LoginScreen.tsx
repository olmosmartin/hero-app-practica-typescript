import { useHistory } from "react-router-dom";



export const LoginScreen = () => {
    const history = useHistory()
    
    const handleOnClick = () => {
        // replace es para que no quede en el stack de navegacion?
        history.replace('/');
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
