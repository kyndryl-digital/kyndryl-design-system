import { html } from 'lit';
import { PREFIX_TAG } from '../../../global/settings/settings';
import '../navItem';

export default {
  title: 'Web Components/Nav Item',
  component: `${PREFIX_TAG}-nav-item`,
};

const Template = args => {
  return html`
      <nav-item>Click</nav-item>
    `;
};

export const navItem = Template.bind({});