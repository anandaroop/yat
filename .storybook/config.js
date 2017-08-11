import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/Yat/stories.js');
}

configure(loadStories, module)
