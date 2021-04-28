import { shallow } from 'enzyme';
import React from 'react';
import SearchBar from './SearchBar';


describe('<SearchBar />', () =>{

    it('render without crashing', () => {
        expect(shallow(<SearchBar/>).html()).toMatchSnapshot();
    })

    it('should trigger onChange fn while typing in', () => {
        const searchString = "search";
        const mockOnChange = jest.fn();
        const wrapper = shallow(<SearchBar handleSearchChange={mockOnChange} />);
        wrapper.find('input').at(0).simulate('change', {target: {value: searchString}});
        
        expect(mockOnChange).toHaveBeenCalledTimes(1);
    })
})