import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	View,
	Text,
	Modal, 
	TouchableHighlight
} from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import Logo from './Logo';
import Form from './Form';
import FormRegister from './FormRegister';
import Wallpaper from './Wallpaper';
import ButtonSubmit from './ButtonSubmit';


export default class SignupSection extends Component {

	constructor(props, context) {
    super(props, context)
    this.state = {
			modalVisible1: false,
			modalVisible2: false
    }
  }

  setModalVisible1(visible) {
    this.setState({modalVisible1: visible});
	}

	setModalVisible2(visible) {
    this.setState({modalVisible2: visible});
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Modal // Create Account
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible1}
          onRequestClose={() => {this.setModalVisible1(!this.state.modalVisible1)}}
          >
						<Wallpaper>
							<FormRegister />
						</Wallpaper>
        </Modal>
				<Modal // Forgot Password
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible2}
          onRequestClose={() => {this.setModalVisible2(!this.state.modalVisible2)}}
          >
					<Wallpaper>
							<FormRegister />
					</Wallpaper>
        </Modal>
				<TouchableHighlight onPress={() => {
          this.setModalVisible1(true)
        }}>
					<Text style={styles.text}>Create Account</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => {
          this.setModalVisible2(true)
        }}>
					<Text style={styles.text}>Forgot Password?</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		top: 65,
		width: DEVICE_WIDTH,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
});
