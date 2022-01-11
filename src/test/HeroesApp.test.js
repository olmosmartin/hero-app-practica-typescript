import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { HeroesApp } from "../HeroesApp";


describe('pruebas en TodoApp.js', () => {

    test('debe mostrarse correctamente como el snapshop', () => {

        const wrapper = shallow( <HeroesApp /> );
        expect(wrapper).toMatchSnapshot();

    })

})