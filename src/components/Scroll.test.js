import { shallow } from 'enzyme';
import React from 'react';
import Scroll from './Scroll';


describe('<Scroll />', () =>{

    it('render without crashing', () => {
        expect(shallow(<Scroll/>).html()).toMatchSnapshot();
    })


})