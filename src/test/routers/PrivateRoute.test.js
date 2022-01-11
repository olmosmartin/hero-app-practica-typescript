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

        expect(wrapper.find('span').exists()).toBe(true);
        //use esta linea para saber qué argumentos espera
        //expect( Storage.prototype.setItem ).toHaveBeenCalledWith({})
        expect( Storage.prototype.setItem ).toHaveBeenCalledWith('lastPath', '/marvel')
        

    })

})