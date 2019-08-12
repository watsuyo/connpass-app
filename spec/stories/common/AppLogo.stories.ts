/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue'
import AppLogo from '../../../src/components/common/AppLogo.vue'

storiesOf('AppLogo', module).add('default', () => ({
  components: { AppLogo },
  template: '<AppLogo />'
}))
