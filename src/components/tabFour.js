import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Content, Item, Input, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
const { height, width } = Dimensions.get('window');
export default class tabFour extends Component {
  render() {
    return (
      <Container>
        <Content>
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
      </Container>
    );
  }
}