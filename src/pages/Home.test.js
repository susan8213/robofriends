import { shallow, render } from 'enzyme';
import React from 'react';
import Home from './Home';

let wrapper;

describe('<Home />', () =>{
    beforeEach(() => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            robots: [],
            searchField: '',
            isPending: false
          }
          wrapper = shallow(<Home {...mockProps}/>)
    })

    it('render without crashing', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    it('filter robots correctly', () => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            robots: [{id: 1, name: 'Leanne Graham'}],
            searchField: 'Leanne',
            isPending: false
          }
          wrapper = render(<Home {...mockProps}/>)
          expect(wrapper.find('.card')).toHaveLength(1);
    })

    it('filter robots correctly with 0 result', () => {
        const mockProps = {
            onRequestRobots: jest.fn(),
            robots: [{id: 1, name: 'Leanne Graham'}],
            searchField: 'abcde',
            isPending: false
          }
          wrapper = render(<Home {...mockProps}/>)
          expect(wrapper.find('.card')).toHaveLength(0);
    })


})