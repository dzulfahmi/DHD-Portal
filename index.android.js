/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Linking,
  Alert,
  Modal,
  TouchableHighlight
} from 'react-native';
import {  
  Container, 
  Header, 
  Content, 
  Card, 
  CardItem, 
  Drawer,
  Fab,
  List,
  ListItem, 
  Thumbnail, 
  Button, 
  Icon, 
  Left, 
  Body, 
  Right,
  Tab, Tabs, TabHeading, Item, Input, Segment, Subtitle, Caption
} from 'native-base';
import { MapView } from 'react-native';
import { NavigationBar, Title } from '@shoutem/ui'
import Main from './src/components/Main';

export default class DHD_Portal extends Component {

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Main />
        </View>
      </Container>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});


AppRegistry.registerComponent('DHD_Portal', () => DHD_Portal);
