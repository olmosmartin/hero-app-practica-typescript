import { mount } from "enzyme";
import '@testing-library/jest-dom';
import { DashboardRoutes } from "../../routers/DashboardRoutes";
import { AuthContext } from "../../auth/AuthContext";
import { MemoryRouter } from "react-router-dom";


describe('pruebas en DashboardRoutes.tss', () => {

    test('debe mostrar el login si no esta autenticado', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                user: "martin"
            }
        }

        const wrapper = mount(
            //uso el authcontext para darle el contexto al approuter que lo necesita, y le paso datos de prueba 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot()
        expect( wrapper.find('.text-info').text().trim() ).toBe('martin')
    })

})