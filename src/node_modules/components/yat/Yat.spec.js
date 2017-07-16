import React from 'react'
import renderer from 'react-test-renderer'
import Yat from './Yat'

beforeEach(() => {})

it('renders a placeholder while waiting', () => {
  navigator.geolocation = {
    getCurrentPosition: jest.fn()
  }
  const tree = renderer.create(<Yat />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the returned coordinates', () => {
  const response = {
    coords: { longitude: -90, latitude: 30 }
  }
  navigator.geolocation = {
    getCurrentPosition: jest.fn(cb => cb(response))
  }
  const tree = renderer.create(<Yat />).toJSON()
  expect(tree).toMatchSnapshot()
})
