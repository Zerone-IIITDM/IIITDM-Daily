import React from 'react';
import HomeScreen from '../js/components/HomeScreen/HomeScreen';
import renderer from 'react-test-renderer';

test('renders correctly', ()=> {
    const tree = renderer.create(<HomeScreen/>).toJSON();
    expect(tree).toMatchSnapshot();
});
