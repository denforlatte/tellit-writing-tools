import React from 'react';
import { shallow } from 'enzyme';
import { CharactersPage } from './CharactersPage';

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
      const wrapper = shallow(<CharactersPage characters={characters} match={match} getCharacters={mockFunction} selectCharacter={mockFunction} addNewCharacter={mockFunction} user={{}}/>);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
