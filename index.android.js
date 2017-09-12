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
  Footer,
  FooterTab,
  Icon,
  Fab,
  Badge,
  List,
  ListItem, 
  Thumbnail, 
  Button,  
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
  constructor() {
    super();
    this.state = {
      active: 'false'
    };
  }
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
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
          <Card>
          <CardItem>
            <Body>
              <Text>
                Berita 1
              </Text>
              <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            </Body>
          </CardItem>
          </Card>
          <Card>
          <CardItem>
            <Body>
              <Text>
                Berita 1
              </Text>
              <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            </Body>
          </CardItem>
          </Card>
          <Card>
          <CardItem>
            <Body>
              <Text>
                Berita 1
              </Text>
              <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </Text>
            </Body>
          </CardItem>
          </Card>
        </Content>
        <View>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name='A'/>
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name='A1'/>
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name='A2'/>
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name='A3'/>
            </Button>
          </Fab>
        </View>
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
