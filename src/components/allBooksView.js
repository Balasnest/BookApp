import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  TextInput,
  Alert,
  BackAndroid,
  ListView
} from 'react-native'
import { connect } from 'react-redux'

import { styles } from './styles'
import { getColor } from '../lib/helpers'


class AllBooks extends Component {
  constructor(props) {
    super(props)

    this._handleBackButton = this._handleBackButton.bind(this)
  }

  render() {
    return (
      <View style={ styles.allNotesContainer }>
        <StatusBar
          backgroundColor={getColor('paperBlue700')}
          barStyle="light-content"
          animated={true}
        />
        <Toolbar title="iCicleTech" color={getColor('paperBlue')}/>
      </View>
    )
  }

}

export default AllBooks;
