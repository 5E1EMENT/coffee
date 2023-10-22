import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppButton from '../AppButton.vue'

describe('AppButton', () => {
  it('renders properly', () => {
    const wrapper = mount(AppButton, { props: { loading: false } })
    expect(wrapper.text()).toContain('')
    expect(wrapper.props()).toEqual({ loading: false })
  })

  it('Renders with loading state', () => {
    const wrapper = mount(AppButton, { props: { loading: true } })

    expect(wrapper.html()).toContain('disabled')
  })
})
