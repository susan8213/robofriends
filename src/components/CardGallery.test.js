import { shallow } from 'enzyme';
import React from 'react';
import CardGallery from './CardGallery';
import Card from './Card';


describe('<CardGallery />', () =>{

    it('render without crashing', () => {
        expect(shallow(<CardGallery robots={[]}/>).html()).toMatchSnapshot();
    })

    it('should contain <Card />', () => {
        const mockRobots = [{id: 1}];
        const expectedChild = <Card id={1}/>;
        expect(shallow(<CardGallery robots={mockRobots}/>).contains(expectedChild)).toBe(true);
    })


})