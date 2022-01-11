import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { HeroList } from "../../../components/heroes/HeroList";


describe('pruebas en HeroList.tsx', () => {

    test('debe mostrarse correctamente con el snapshot', () => {
        const wrapper = shallow(<HeroList publisher={"DC Comics"}/>);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe tener 10 elementos', () => {
        const wrapper = shallow(<HeroList publisher={"DC Comics"}/>);
        const items = wrapper.find("HeroCard")
        //console.log(wrapper.html())
        expect(items.length).toBe(10)
    })

})