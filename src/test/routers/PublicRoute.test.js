import { mount } from "enzyme";
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";
import { PublicRoute } from "../../routers/PublicRoute";


describe('pruebas en PrivateRoute.js', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('No debe mostrar el componente si está autenticado', () => {

        //en component le mando una funcion cualquiera que devuelve con componente cualquieraa
        const wrapper = mount( 
            <MemoryRouter>
                <PublicRoute 
                    isAuthenticated={true}
                    component={()=><span>hola mundo</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        //console.log(wrapper.html());
        
        //si está autenticado el componente que le mande NO se tiene q mostrar
        expect(wrapper.find('span').exists()).toBe(false);
        
    })

    test('NO debe bloquear el componente si no está autenticado', () => {

        //en component le mando una funcion cualquiera que devuelve con componente cualquieraa
        const wrapper = mount( 
            <MemoryRouter>
                <PublicRoute 
                    isAuthenticated={false}
                    component={()=><span>hola mundo</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(true);
        
    })

})