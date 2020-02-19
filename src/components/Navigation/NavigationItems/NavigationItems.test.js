import React from 'react';

import { configure,shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure({adapter: new Adapter()});

describe('<NavigationItems/>', () => {
    let wrapper;
    beforeEach( () => {
        wrapper = shallow(<NavigationItems/>);
    })

    it('it should render two <Navigationitem/> if not authenticated',() =>{
         wrapper = shallow(<NavigationItems/>);
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('it should render three <Navigationitem/> if  authenticated',() =>{
        //wrapper = shallow(<NavigationItems isAuthenticated/>);
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('it should render logout button if authenticated',() =>{
        wrapper.setProps({isAuthenticated: true});
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});