<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> fbe2f9e27e0152af1cb6c33c854e8a7bfc549de7
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bands from '../components/Bands';
import BandInput from '../components/BandInput';
=======
import React, { Component } from 'react'
import BandInput from 'BandInput';
import Bands from './Bands';
import { connect } from 'react-redux'
>>>>>>> 51498838fe992b795436871001a202251b693b68


class BandsContainer extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
=======
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
>>>>>>> 51498838fe992b795436871001a202251b693b68
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })
<<<<<<< HEAD

=======
>>>>>>> 51498838fe992b795436871001a202251b693b68
const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
