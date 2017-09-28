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
import { NavigationBar, Title } from '@shoutem/ui';
import Wallpaper from './Wallpaper';


const { height, width } = Dimensions.get('window');
var DEFAULT_URL = 'https://www.developer-tech.com';
var TEXT_INPUT_REF = 'urlInput';
var WEBVIEW_REF = 'webview';

export default class tabOne extends Component {
  constructor(){
      super();
      this.state = {
          news: [],
          loading: true,
          newsFilter: [],
          modalVisible: false,
          linkkk : ''
      };
  }

  setModalVisible(visible, linkk) {
    this.setState({modalVisible: visible});
    console.log('landing here setModalVisible linkk', linkk);
    this.state.linkkk = DEFAULT_URL + linkk;
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
    <Wallpaper>
      <Container>
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
        <Content>
          <Card transparent style={{flex: 0}}>
             {!newss ? (
              <Text>Nothing News</Text> 
             ): 
                 this.state.newsFilter.map((attribute, keyz)=>{ 
                  console.log("isi map", attribute.Link)
                  const link = DEFAULT_URL + attribute.Link;
                  console.log("landing here LINK", link);
                  return(
                    <View>
                      <CardItem key={keyz.toString()}>
                        <Left>
                          <Thumbnail source={{uri: 'https://cdn-images-1.medium.com/max/2000/1*jDIj2SKAE-Bp32owLoHDjw.png'}} />
                          <Body>
                            <TouchableOpacity activeOpacity={0.7} onPress={() => {
                              console.log("LANDING HERE ONPRESS", attribute.Link);
                              this.setModalVisible(true, attribute.Link);
                            }}>
                              <Text style={{ color: '#c02534', fontSize: 15, marginTop: 10 }}>{attribute.Title}</Text>
                            </TouchableOpacity>
                          </Body>
                        </Left>
                      </CardItem>
                    </View>
                  ) })}
          </Card>
          <View>
            <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              onRequestClose={() => {this.setModalVisible(!this.state.modalVisible, null)}}
              >
              <View style={{flex:1}}>
              <WebView
                ref={WEBVIEW_REF}
                automaticallyAdjustContentInsets={false}
                source={{uri: this.state.linkkk}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                decelerationRate="normal"
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit}
              />
              </View>
            </Modal>
          </View>
        </Content>
      </Container> 
    </Wallpaper>   
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
