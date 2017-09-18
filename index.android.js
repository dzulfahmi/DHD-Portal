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
  Linking
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
          newsFilter: []
      };
  }

  componentDidMount(){
    fetch('https://api.apifier.com/v1/execs/rdF3LwJutJRWfGe5N/results')
    .then((response)=> response.json())
    .then((responseJson) => {
      console.log('landing here responseJSON', responseJson); 
      this.setState({
        news: responseJson,
        newsFilter : responseJson[0].pageFunctionResult // Something to add for appearing all news at first
      }) 
    })
    .catch((error) => {
      console.log(error);
    })
    console.log('landing here componentDidMount',this);
  }


  handleFilter = (param) => {
    const filteredNews = [];
    this.state.news[0].pageFunctionResult.map((data) => {
      if (data.Title.toLowerCase().includes(param.toLowerCase())) {
        filteredNews.push(data);
        console.log('landing here filteredNews',filteredNews);
      }
    });
    this.setState({
      newsFilter: filteredNews
    });
  }

  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    const newss = this.state.news;
    return (
      <Container>
        <Content>
          <Card style={{flex: 0}}>
             {!newss ? (
              <Text>Nothing News</Text> 
             ): 
                 this.state.newsFilter.map((attribute, keyz)=>{ 
                  console.log("isi map", attribute.Title)
                  const link = attribute.Link;
                  return(
                    <CardItem key={keyz.toString()}>
                    <Left>
                      <Thumbnail source={{uri: 'https://dummyimage.com/600x400/000/fff'}} />
                      <Body>
                        <TouchableOpacity activeOpacity={0.7} onPress={() => Linking.openURL({link})}>
                          <Text style={{ color: '#c02534', fontSize: 15, marginTop: 10 }}>{attribute.Title}</Text>
                        </TouchableOpacity>
                      </Body>
                    </Left>
                  </CardItem>
                  ) })}
          </Card>
        </Content>
        <Header searchBar rounded>
          <Item>
            <Input 
              placeholder="Search"
              onChangeText={text => this.handleFilter(text)}
            />
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
