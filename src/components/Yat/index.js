import React, { Component } from 'react'

const coordinateString = (coordinates, order) => {
  return order === 'lat,lon'
    ? `${coordinates.latitude}, ${coordinates.longitude}`
    : `${coordinates.longitude}, ${coordinates.latitude}`
}
class Yat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLocated: false,
      longitude: null,
      latitude: null
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { longitude, latitude } = position.coords
      this.setState({
        isLocated: true,
        longitude,
        latitude
      })
    })
  }

  render() {
    const { isLocated, longitude, latitude } = this.state
    const { order } = this.props
    return (
      <div>
        {isLocated ? coordinateString({ longitude, latitude }, order) : 'locating…'}
      </div>
    )
  }
}

Yat.defaultProps = {
  order: 'lon,lat'
}

export default Yat
