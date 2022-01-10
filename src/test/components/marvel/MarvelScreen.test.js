import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { MarvelScreen } from "../../../components/marvel/MarvelScreen";


describe('pruebas en MarvelScreen.tsx', () => {

    test('debe mostrarse correctamente con el snapshot', () => {
        const wrapper = shallow(<MarvelScreen />);
        expect(wrapper).toMatchSnapshot();
    })

})