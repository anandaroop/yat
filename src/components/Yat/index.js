import React, { Component } from 'react'

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
    return (
      <div>
        {isLocated ? `${longitude}, ${latitude}` : 'locating…'}
      </div>
    )
  }
}

export default Yat
