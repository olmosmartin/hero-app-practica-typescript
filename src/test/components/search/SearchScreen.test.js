import { mount } from "enzyme";
import '@testing-library/jest-dom';
import { SearchScreen } from "../../../components/search/SearchScreen";
import { MemoryRouter, Route } from "react-router-dom";


describe('pruebas en SearchScreen.tsx', () => {

    test('debe mostrarse correctamente con el snapshot', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/buscar']}>
                <Route path="/buscar" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe("Search Screen");
        expect(wrapper.find('.alert-info').text().trim()).toBe("Search a hero");
    })

    test('debe mostrar a batman y al input con el valor de quety string', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/buscar?q=batman']}>
                <Route path="/buscar" component={ SearchScreen } />
            </MemoryRouter>
        );
        
        expect(wrapper.find('input').prop('value')).toBe("batman");
        //puedo tener multiples snapshot
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar un error si no se encuentra el heroe', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/buscar?q=asdf']}>
                <Route path="/buscar" component={ SearchScreen } />
            </MemoryRouter>
        );
        
        expect(wrapper.find('.alert-danger').text().trim()).toBe("No hay un heroe con asdf");

    })

    test('debe llamar el push del history', () => {

        const history = {
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/buscar']}>
                <Route 
                    path="/buscar" 
                    component={ () => <SearchScreen history = {history} /> } 
                />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
            target: {
                name: 'heroe',
                value: 'batman'
            }
        })

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        })
        
        expect( history.push ).toHaveBeenCalledWith("?q=batman")

    })

})