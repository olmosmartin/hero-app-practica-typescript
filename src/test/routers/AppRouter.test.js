import { mount } from "enzyme";
import '@testing-library/jest-dom';
import { AppRouter } from "../../routers/AppRouter";
import { AuthContext } from "../../auth/AuthContext";


describe('pruebas en AppRouter.tss', () => {

    test('debe mostrar el login si no esta autenticado', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: false
            }
        }

        const wrapper = mount(
            //uso el authcontext para darle el contexto al approuter que lo necesita, y le paso datos de prueba 
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot()
    })

    test('debe mostrar el componente de marvel si está autenticado', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true
            }
        }

        const wrapper = mount(
            //uso el authcontext para darle el contexto al approuter que lo necesita, y le paso datos de prueba 
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        );

        //si estoy autenticado se va a ver (entre otras cosas) un navbar que no está en el login cuando estoy sin autenticar
        expect( wrapper.find('.navbar').exists() ).toBe(true)
    })

})