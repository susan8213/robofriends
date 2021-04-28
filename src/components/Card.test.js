import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';


describe('<Card />', () =>{
    it('smoke test', () => {
        expect([]).toEqual([]);
    });

    it('render without crashing', () => {
        expect(shallow(<Card/>).html()).toMatchSnapshot();
    })

    it('contains img tag', () => {
        const wrapper = shallow(<Card/>);
        expect(wrapper.find('img')).toHaveLength(1);
    })
})