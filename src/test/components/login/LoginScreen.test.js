import { mount } from "enzyme";
import '@testing-library/jest-dom';
import { LoginScreen } from "../../../components/login/LoginScreen";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/types";


describe('pruebas en LoginScreen.tsx', () => {

    const history = {
        replace: jest.fn(),
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
            user: "Martin"
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue } >
            <LoginScreen history = { history } />
        </AuthContext.Provider>
    );


    test('debe mostrarse correctamente con el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('debe realizar el dispatch y la navegacion', () => {

        wrapper.find('button').prop('onClick')();
        
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                user: "Martin"
            }
        })
        expect(wrapper).toMatchSnapshot();
        expect( history.replace ).toHaveBeenCalled();

    })

    test('debe guardar el local storage', () => {

        const handleClick = wrapper.find('button').prop('onClick');
        
        handleClick();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                user: "Martin"
            }
        })
        expect( history.replace ).toHaveBeenCalledWith("/");

        localStorage.setItem('lastPath', '/dc')
        handleClick();

        expect( history.replace ).toHaveBeenCalledWith("/dc");

    })

})