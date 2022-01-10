import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { DcScreen } from "../../../components/dc/DcScreen";


describe('pruebas en DcScreen.tsx', () => {

    test('debe mostrarse correctamente con el snapshot', () => {
        const wrapper = shallow(<DcScreen />);
        expect(wrapper).toMatchSnapshot();
    })

})