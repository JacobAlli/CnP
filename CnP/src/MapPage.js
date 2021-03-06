'use strict';

import React, { Component } from 'react'
import {Icon, Button, Avatar, Header} from 'react-native-elements'
import {Linking, StyleSheet, Image, View, TouchableHighlight, TouchableOpacity, FlatList, Text, ImageBackground, ScrollView, Dimensions, Br,} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from "react-native-maps"

import Navigation from "./Navigation.js"
import Navbar from './Navbar.js'
import Home from '../App.js'
import YourBill from './YourBill.js'
import FoodDrinks from './FoodDrinks.js'
import Drinks from './Drinks.js'
import Pickleball from './Pickleball.js'
import Events from './Events.js'
import AboutContact from './AboutContact.js'
import SetLocation from './SetLocation.js'
import LogOut from './LogOut.js'
import WatchLocation from './WatchLocation.js'
import Register from './Register.js'
import LogIn from './LogIn.js'
// import MapPage from './MapPage.js'



let width = Dimensions.get('window').width;

export default class MapPage extends Component<{}> {
  constructor(props){
    super(props)

  }


  render()  {
    return (
      <View style={{flex: 1}}>
      <Text>DUDE</Text>
        <WatchLocation/>
        <Navbar userState={this.props.userState} navigator={this.props.navigator} route='MapPage'/>
      </View>
    );
  }
}

// AppRegistry.registerComponent('MapPage', () => MapPage);


// const styles = StyleSheet.create({
//   map: {
//     position: 'relative',
//     // zindex: '-999',
//     // left: 0,
//     // right: 0,
//     top: 50,
//      bottom: 0
//   }
// });


