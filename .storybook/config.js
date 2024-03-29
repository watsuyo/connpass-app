import { configure } from '@storybook/vue'

// automatically import all files ending in *.stories.js
const req = require.context('../spec/stories', true, /\.stories\.ts$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
