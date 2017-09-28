import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	KeyboardAvoidingView,
	View,
	ActivityIndicator,
	TouchableOpacity,
	Image,
} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import UserInput from './UserInput';
import ButtonSubmit from './ButtonSubmit';
import ButtonSubmitRegister from './ButtonSubmitRegister';
import SignupSection from './SignupSection';

import usernameImg from '../images/username.png';
import passwordImg from '../images/password.png';
import eyeImg  from '../images/eye_black.png';

export default class FormForget extends Component {
	constructor(props) {
    super(props);
    this.state = {
			showPass: true,
			press: false,
		};
		this.showPass = this.showPass.bind(this);
	}

	showPass() {
  this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
  }

	render() {
		return (
			<View style={{
        marginTop: 50,
        flex: 0.75,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <UserInput source={usernameImg}
					placeholder='First Name'
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false} />
        <UserInput source={usernameImg}
					placeholder='Last Name'
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false} />
        <UserInput source={usernameImg}
					placeholder='Email'
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false} />
				<UserInput source={usernameImg}
					placeholder='Username'
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false} />
				<UserInput source={passwordImg}
					secureTextEntry={this.state.showPass}
					placeholder='Password'
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false} />
        <ButtonSubmitRegister />
			</View>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
		alignItems: 'center',
	},
	btnEye: {
    position: 'absolute',
    top: 55,
    right: 28,
  },
  iconEye: {
    width: 25,
    height: 25,
    tintColor: 'rgba(0,0,0,0.2)',
  },
});
