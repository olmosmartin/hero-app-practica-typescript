import { mount } from "enzyme";
import '@testing-library/jest-dom';
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../routers/PrivateRoute";


describe('pruebas en PrivateRoute.js', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('debe mostrar el componente si está autenticado y guardar en localstorage', () => {

        //en component le mando una funcion cualquiera que devuelve con componente cualquieraa
        const wrapper = mount( 
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={true}
                    component={()=><span>hola mundo</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        //console.log(wrapper.html());
        
        //si está autenticado el componente que le mande se tiene q mostrar
        expect(wrapper.find('span').exists()).toBe(true);
        //use esta linea para saber qué argumentos espera
        //expect( Storage.prototype.setItem ).toHaveBeenCalledWith({})
        expect( Storage.prototype.setItem ).toHaveBeenCalledWith('lastPath', '/marvel')
        
    })

    test('debe bloquear el componente si no está autenticado', () => {

        //en component le mando una funcion cualquiera que devuelve con componente cualquieraa
        const wrapper = mount( 
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={false}
                    component={()=><span>hola mundo</span>}
                    {...props}
                />
            </MemoryRouter>
        );

        expect(wrapper.find('span').exists()).toBe(false);
        
    })

})