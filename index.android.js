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
  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    return (
      <Container>
        <Content>
          {/*
          <Tabs style={{backgroundColor:'red'}}>
            <Tab heading={ <TabHeading><Text> Ask Jeeves</Text></TabHeading>}>
              <Tab1 />
            </Tab>
            <Tab heading={ <TabHeading><Text> Alta Vista</Text></TabHeading>}>
              <Tab2 />
            </Tab>
            <Tab heading={ <TabHeading><Text> YAHOO</Text></TabHeading>}>
              <Tab3 />
            </Tab>
          </Tabs>
          */}
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://dummyimage.com/600x400/000/fff'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://dummyimage.com/600x400/000/fff'}} style={{height: 200, width: 0.9 * width , flex: 1}}/>
                <Text>
                  Berita 1
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text> 1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://dummyimage.com/600x400/000/fff'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://dummyimage.com/600x400/000/fff'}} style={{height: 200, width: 0.9 * width , flex: 1}}/>
                <Text>
                  Berita 1
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text> 1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://dummyimage.com/600x400/000/fff'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://dummyimage.com/600x400/000/fff'}} style={{height: 200, width: 0.9 * width , flex: 1}}/>
                <Text>
                  Berita 1
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text> 1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://dummyimage.com/600x400/000/fff'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://dummyimage.com/600x400/000/fff'}} style={{height: 200, width: 0.9 * width , flex: 1}}/>
                <Text>
                  Berita 1
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>

                  <Text> 1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://dummyimage.com/600x400/000/fff'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'https://dummyimage.com/600x400/000/fff'}} style={{height: 200, width: 0.9 * width , flex: 1}}/>
                <Text>
                  Berita 1
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Text> 1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
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
