import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import AppTag from '../AppTag.vue'
import { helpers } from '@/utils/helpers'
describe('AppTag', () => {
  it('renders properly', () => {
    const wrapper = mount(AppTag, { props: { text: '' } })
    expect(wrapper.text()).toContain('')
  })

  it('renders properly with passed text', () => {
    const wrapper = mount(AppTag, { props: { text: 'Hello' } })
    expect(wrapper.text()).toContain('Hello')
  })

  it('renders properly background style', () => {
    const wrapper = mount(AppTag)
    expect(wrapper.attributes()['style']).toBeTruthy()
  })

  it('randomColor composable works correctly ', () => {
    const { randomColor } = helpers()
    expect(randomColor.value).toBeTruthy()
  })
})
