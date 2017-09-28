import React, { Component } from 'react';
import { Image, Dimensions } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Wallpaper from './Wallpaper';
import Logo from './Logo';
import ButtonSubmit from './ButtonSubmit';
import ButtonLogout from './ButtonLogout';
const { height, width } = Dimensions.get('window');
export default class tabThree extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo />
        <ButtonLogout />
      </Wallpaper>
    );
  }
}