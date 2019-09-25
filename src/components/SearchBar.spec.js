import SearchBar from './SearchBar.vue';
import { mount } from '@vue/test-utils';

describe('SearchBar', () => {
  let wrapper = mount(SearchBar, {
    propsData: {
      searchValue: 'brewery',
      placeholder: 'search'
    }
  });
  let input = wrapper.find('input');

  it('sets the initial search value', () => {
    expect(input.element.value).toEqual('brewery');
  });

  it('sets the initial placeholder value', () => {
    expect(input.props().placeholder).toEqual('search');
  });

  it('emits an event when typing', () => {
    input.element.value = 'search';
    input.trigger('input');

    expect(wrapper.emitted().input[0][0]).toEqual('search');
  });
});
