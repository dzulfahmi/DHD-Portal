import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Item, Input, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
const { height, width } = Dimensions.get('window');
import Wallpaper from './Wallpaper';
export default class tabTwo extends Component {
  render() {
    return (
    <Wallpaper>
      <Container>
        <Content>
        <Card style={{flex: 0}}>
        <CardItem style={{backgroundColor: '#dddddd'}}>
          <Left>
            <Thumbnail source={{uri: 'http://static.bbci.co.uk/frameworks/barlesque/3.21.31/orb/4/img/bbc-blocks-dark.png'}} />
            <Body>
              <Text>BBC</Text>
              <Text note>26 September 2017</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image source={{uri: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/1028F/production/_98019166_mediaitem98019162.jpg'}} style={{height: 200, width: 0.9 * width , flex: 1}}/>
            <Text>
            Bill Gates switches to Android phone
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Text> 1000 stars</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
      <Card style={{flex: 0}}>
        <CardItem style={{backgroundColor: '#dddddd'}}>
          <Left>
            <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKjhmki-HUbw5rR4RfP3PpTAjcgj7tmf6dBJQLDgBRVBvkRBNM'}} />
            <Body>
              <Text>Economic Times</Text>
              <Text note>27 September 2017</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToidSLNqv1ONr9sQqUuWQmzMeIIWwWUjyo9BhkKU6oiXP_uWJ3'}} style={{height: 200, width: 0.9 * width , flex: 1}}/>
            <Text>
            Meet the world's first fidget spinner phone
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Text> 2000 stars</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
      <Card style={{flex: 0}}>
        <CardItem style={{backgroundColor: '#dddddd'}}>
          <Left>
            <Thumbnail source={{uri: 'http://static.reuters.com/resources_v2/react/07b0ad2804039e810b5739ef93252534.png'}} />
            <Body>
              <Text>Reuters</Text>
              <Text note>28 September 2017</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image source={{uri: 'http://s4.reutersmedia.net/resources/r/?m=02&d=20170928&t=2&i=1203259145&r=LYNXNPED8R03R&w=1280'}} style={{height: 200, width: 0.9 * width , flex: 1}}/>
            <Text>
            Toyota to form electric car technology venture with Mazda
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Text> 3000 stars</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
      <Card style={{flex: 0}}>
        <CardItem style={{backgroundColor: '#dddddd'}}>
          <Left>
            <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7dVJ6Aiik9HRbrl7y14vWNejrRWWDmIAkkbuJd0Og3srnN2GH9A'}} />
            <Body>
              <Text>The Guardian</Text>
              <Text note>27 September 2017</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image source={{uri: 'https://i.guim.co.uk/img/media/b404b6828e163643ef27a5851ef2e16006a16a0a/670_977_4169_2501/master/4169.jpg?w=620&q=55&auto=format&usm=12&fit=max&s=cacdda995f6b38a7d98593b81bc5c2ad'}} style={{height: 200, width: 0.9 * width , flex: 1}}/>
            <Text>
            Robots could destabilise world through war and unemployment, says UN
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Text> 4000 stars</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
      <Card style={{flex: 0}}>
        <CardItem style={{backgroundColor: '#dddddd'}}>
          <Left>
            <Thumbnail source={{uri: 'https://cdn-images-1.medium.com/max/2000/1*jDIj2SKAE-Bp32owLoHDjw.png'}} />
            <Body>
              <Text>Forbes</Text>
              <Text note>26 September 2017</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Body>
            <Image source={{uri: 'https://specials-images.forbesimg.com/imageserve/851617688/960x0.jpg?fit=scale'}} style={{height: 200, width: 0.9 * width , flex: 1}}/>
            <Text>
            iPhone 8 Wireless Charging Technology Actually Uses Science From The 1800's
            </Text>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent textStyle={{color: '#87838B'}}>
              <Text> 5000 stars</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
        </Content>
      </Container>
    </Wallpaper>
    );
  }
}