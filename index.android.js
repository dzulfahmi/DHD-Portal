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
  StatusBar
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
  Tab, Tabs, TabHeading, Item, Input
} from 'native-base';

import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';

const { height, width } = Dimensions.get('window');

export default class DHD_Portal extends Component {
  constructor(){
      super();
      this.state = {
          news: [],
          loading: true,
      };
  }

  componentDidMount(){
    fetch('https://api.apifier.com/v1/execs/rdF3LwJutJRWfGe5N/results')
    .then((response)=> response.json())
    .then((responseJson) => {
      this.setState({
        news: responseJson,
      }) 
    })
    .catch((error) => {
      console.log(error);
    })
  }


  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    const newss = this.state.news;
    console.log("hhhh===", newss)
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
             {!newss ? (
              <Text>Nothing News</Text> 
             ): 
                 newss[0] && newss[0].pageFunctionResult.map((attribute, key)=>{ 
                  console.log("isi map", attribute)
                  return(
                    <CardItem>
                    <Left>
                      <Thumbnail source={{uri: 'https://dummyimage.com/600x400/000/fff'}} />
                      <Body>
                        <Text>{attribute.Title}</Text>
                        <Text>HHH</Text>
                      </Body>
                    </Left>
                  </CardItem>
                  ) })}
          </Card>
        </Content>
        <Header searchBar rounded>
          <Item>
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('DHD_Portal', () => DHD_Portal);
