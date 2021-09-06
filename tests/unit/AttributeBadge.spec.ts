import { shallowMount } from '@vue/test-utils';
import AttributeStars from '../../src/components/AttributeBadge.vue';

describe('AttributeBadge', () => {
  it ("renders props.type props.rating when passed", () => {
    let type = "text";
    const rating = 80;
    const textGrade = "sehr gut";
    const numberGrade = 1;

    const wrapper = shallowMount(AttributeStars, {
      props: {type, rating}
    });

    expect(wrapper.text()).toContain(textGrade);

    type = "number";
    wrapper.setProps({type});

    expect(wrapper.text()).toContain(numberGrade);
  })
});
