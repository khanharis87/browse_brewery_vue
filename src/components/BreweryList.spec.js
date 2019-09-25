import BreweryCard from './BreweryCard';
import BreweryList from './BreweryList';
import SearchBar from './SearchBar.vue';
import ResetButton from './ResetButton';
import { mount } from '@vue/test-utils';

let mockPromise = jest.fn(() => Promise.resolve());
global.fetch = mockPromise;

describe('BreweryList', () => {
  let wrapper = mount(BreweryList, {
    computed: {
      filteredList: jest.fn(() => [
        {
          name: 'Haris',
          country: 'US'
        },
        {
          name: 'John',
          country: 'NL'
        }
      ])
    }
  });
  let getBreweryList = mockPromise;

  wrapper.setMethods(getBreweryList);

  it('should render two Search components', () => {
    expect(wrapper.findAll(SearchBar).length).toBe(2);
  });

  it('should render one ResetButton component', () => {
    expect(wrapper.findAll(ResetButton).length).toBe(1);
  });

  it('should render BreweryCard components, with length based on filteredList computed property', () => {
    expect(wrapper.findAll(BreweryCard).length).toBe(2);
  });

  it('should call getBreweryList method on mount', () => {
    expect(getBreweryList).toBeCalled();
  });
});
