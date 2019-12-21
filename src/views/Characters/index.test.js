import React from 'react';
import { shallow } from 'enzyme';
import { Characters } from './index';
import { Spinner } from 'reactstrap';

const characters = {
  isLoading: true,
};

const match = {
  params: {
    url: ''
  }
}

const mockFunction = jest.fn();

describe('Characters View', () => {
  describe('renders', () => {
    it('shows a spinner when fetching characters', () => {
      const wrapper = shallow(<Characters characters={characters} match={match} getCharacters={mockFunction} selectCharacter={mockFunction} addNewCharacter={mockFunction} user={{}}/>);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
