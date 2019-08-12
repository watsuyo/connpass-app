import { mount } from '@vue/test-utils'
import AppLogo from '~/components/common/AppLogo.vue'

describe('AppLogo.vue', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AppLogo)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
