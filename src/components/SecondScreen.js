import React, { Component, PropTypes } from 'react';
import {
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Animated,
	Easing
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
import { Actions, ActionConst } from 'react-native-router-flux';
import Tab1 from './tabOne';
import Tab2 from './tabTwo';
import Tab3 from './tabThree';
import Tab4 from './tabFour';

import arrowImg from '../images/left-arrow.png';

const SIZE = 40;

export default class SecondScreen extends Component {
	constructor() {
		super();

		this.state = {
			isLoading: false,
		};

		this._onPress = this._onPress.bind(this);
		this.growAnimated = new Animated.Value(0);
	}

	_onPress() {
		if (this.state.isLoading) return;

		this.setState({ isLoading: true });

		Animated.timing(
			this.growAnimated,
			{
				toValue: 1,
				duration: 300,
				easing: Easing.linear,
			}
		).start();

		setTimeout(() => {
			Actions.pop();
		}, 500);
	}

	render() {
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, SIZE],
		});

		return (
			<View style={styles.container}>
				<Tabs initialPage={1} tabBarPosition="bottom">
          <Tab heading="Preferer">
            <Tab2 />
          </Tab>
          <Tab heading="All">
            <Tab1 />
          </Tab>
          <Tab heading="Settings">
            <Tab3 />
          </Tab>
        </Tabs>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 0,
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		width: SIZE,
		height: SIZE,
		borderRadius: 100,
		zIndex: 99,
		backgroundColor: '#F035E0',
	},
	circle: {
		height: SIZE,
		width: SIZE,
		marginTop: -SIZE,
		borderRadius: 100,
		backgroundColor: '#F035E0',
	},
	image: {
		width: 24,
		height: 24,
	}
});