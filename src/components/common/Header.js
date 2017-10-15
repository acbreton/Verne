import React from 'react';
import { Text, View, TouchableHighlight, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = (props) => {
	const { textStyle, viewStyle, drawerIconStyle } = styles;

	return (
		<View style={viewStyle}>
			<StatusBar backgroundColor="#FFC312" barStyle="light-content" />
			<TouchableHighlight style={drawerIconStyle} onPress={ () => navigate('DrawerOpen') }>
				<Icon name="bars" size={30} color="#fff" />
			</TouchableHighlight>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#FFC312',
		alignItems: 'center',
		height: 55,
		shadowColor: '#000',
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.4,
		elevation: 3,
		position: 'relative',
		flexDirection: 'row'
	},
	textStyle: {
		fontSize: 20,
		alignItems: 'flex-end',
		justifyContent: 'center',
		color: '#fff',
		fontFamily: 'Gotham Bold',
		paddingRight: 15,
		flex: 9
	},
	drawerIconStyle: {
		alignItems: 'flex-start',
		paddingLeft: 15,
		flex: 1
	}
};

export { Header };