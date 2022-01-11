import { mount } from "enzyme";
import '@testing-library/jest-dom';
import { AuthContext } from "../../../auth/AuthContext";
import { MemoryRouter, Router } from "react-router-dom";
import { types } from "../../../types/types";
import { HeroScreen } from "../../../components/heroes/HeroScreen";


describe('pruebas en HeroScreen.tsx', () => {

    //creo un mock de history
    const historyMock = {
        push: jest.fn(),
        location: {},
        //voy agregando las propiedades que me va pidiendo cuando me tira error
        listen: jest.fn(),
        createHref: jest.fn(),
        replace: jest.fn()
    }

    const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Router history = {historyMock}>
                    <HeroScreen />
                </Router>
            </MemoryRouter>
    );
    
    //lo limpio despues de la prueba
    afterEach(() => {
        jest.clearAllMocks()
    })

    test('debe mostrar el componente redirect si no hay argumentos en la URL', () => {
        expect( wrapper.find('Redirect').exists() ).toBe(true)
    })

})