import { mount } from "enzyme";
import '@testing-library/jest-dom';
import { Navbar } from "../../../components/ui/NavBar";
import { AuthContext } from "../../../auth/AuthContext";
import { MemoryRouter, Router } from "react-router-dom";
import { types } from "../../../types/types";


describe('pruebas en Navbar.tsx', () => {

    //creo un mock de history
    const historyMock = {
        push: jest.fn(),
        location: {},
        //voy agregando las propiedades que me va pidiendo cuando me tira error
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
            user: "martin"
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value={ contextValue }>
            <MemoryRouter>
                <Router history = {historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );
    
    //lo limpio despues de la prueba
    afterEach(() => {
        jest.clearAllMocks()
    })

    test('debe mostrarse correctamente con el snapshot', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('martin')
    })

    test('debe llamar el logout y usar el history', () => {
        //simulo el click del boton
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        })
        expect(historyMock.replace).toHaveBeenCalledWith("/login")
    })

})