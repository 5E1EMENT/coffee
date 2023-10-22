import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import AppCard from '../AppCard.vue'

describe('AppCard', () => {
  const cardMock = {
    id: 179,
    uid: '06ae9054-ab9e-4ea5-bfc9-70655168ab9c',
    blend_name: 'KrebStar Blend',
    origin: 'Harrar, Ethiopia',
    variety: 'Villa Sarchi',
    notes: 'balanced, juicy, prune, green-tea, nutella',
    intensifier: 'dull',
    url: 'https://loremflickr.com/cache/resized/7807_32638168367_5587286b62_c_500_500_nofilter.jpg'
  }
  let wrapper

  beforeEach(() => {
    wrapper = mount(AppCard, { props: { card: cardMock } })
  })

  it('renders properly', () => {
    expect(wrapper.props()).toEqual({ card: cardMock })
  })

  it('render text properly', () => {
    const warpperName = wrapper.find('h3')
    const warpperVariety = wrapper.find('.card__variety')
    expect(warpperName.text()).toEqual('KrebStar Blend')
    expect(warpperVariety.text()).toEqual('Villa Sarchi')
  })
})
