import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableHighlight, TouchableOpacity, FlatList, Text, ImageBackground, SectionList, AppRegistry,  ActivityIndicator, ListView, Alert, TabBarIOS, AlertIndicatorIOS, ActivityIndicatorIOS, AlertIOS,Br} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// const image1 = require('../../../public/images/chicken.jpg');
// const image2 = require('../../../public/images/chicken.jpg');
// const image3 = require('../../../public/images/chicken.jpg');
// const image4 = require('../../../public/images/chicken.jpg');
// const image5 = require('../../../public/images/chicken.jpg');
let cart;
let cartData = [
   ]

  console.log("raw: ",cartData);

class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {

    return fetch(`https://lit-reef-60415.herokuapp.com/order_details/${this.props.userState.id}`)
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        },
        function() {
          cart=responseJson;
          cartData=cart;
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }


  _renderItem({ item, index }) {
    const {
      containerStyle,
      lastItemStyle,
      imageStyle,
      textStyle,
      counterStyle,
      priceStyle } = styles;

    return (
    <View style={(index + 1 === cartData.length) ? lastItemStyle : containerStyle}>
      {/* <Image source={item.image} style={imageStyle} /> */}

      <Text style={{width: '80%'}}>{item.product_description}</Text>

      {/* <View style={counterStyle}>
        <Icon.Button
          name="ios-remove"
          size={25}
          color='#fff'
          backgroundColor='#fff'
          style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30 }}
          iconStyle={{ marginRight: 0 }}
        /> */}

        <Text>${item.cost}</Text>

        {/* <Icon.Button
          name="ios-add"
          size={25}
          color='#fff'
          backgroundColor='#fff'
          style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30 }}
          iconStyle={{ marginRight: 0 }}
        /> */}

      {/* </View> */}
    </View>);
  }




  render() {
    if(this.state.isLoading){
      return (
          <ActivityIndicator />
        )
    }
    return (
      <FlatList
        data={cartData}
        renderItem={this._renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  lastItemStyle: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginRight: 20
  },
  textStyle: {
    flex: 2,
    justifyContent: 'center'
  },
  priceStyle: {
    backgroundColor: '#ddd',
    width: 40,
    alignItems: 'center',
    marginTop: 3,
    borderRadius: 3
  },
  counterStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

export default Item;
