import React, { Component } from 'react';
import { View } from 'react-native';
import Item from './Item';

class ItemContainer extends Component {
  render() {
    return (
      <View style={styles.containterStyle}>
        <Item />
      </View>
    );
  }
}

const styles = {
  containterStyle: {
    flex: 4,
    backgroundColor: '#DCDCDC'
  }
};

export default ItemContainer;