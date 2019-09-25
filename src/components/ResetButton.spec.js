import ResetButton from './ResetButton.vue';
import { mount } from '@vue/test-utils';

describe('ResetButton', () => {
  it('renders the content in the default slot ', () => {
    let wrapper = mount(ResetButton, {
      slots: {
        default: 'Reset'
      }
    });

    expect(wrapper.html()).toContain('Reset');
  });

  it('emits an event when button is clicked', () => {
    let wrapper = mount(ResetButton);
    let button = wrapper.find('button');

    button.trigger('click');

    expect(wrapper.emitted().reset).toBeTruthy();
  });
});
