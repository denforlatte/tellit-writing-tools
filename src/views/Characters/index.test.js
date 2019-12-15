import React from 'react';
import { shallow } from 'enzyme';
import Characters from './index';

describe('Characters View', () => {
  describe('renders', () => {
    it('shows a spinner when fetching characters', () => {
      const wrapper = shallow(<Characters />);

      expect(wrapper).toMatchSnapshot();
    })
  })
})