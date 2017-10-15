import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager, Platform } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions/';

class ListItem extends Component {

	constructor() {
	    super();

	    if (Platform.OS === 'android') {
	      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
	    }
	 }

	componentWillUpdate() {
		LayoutAnimation.spring();
	}


	renderDescription() {
		const { library, expanded } = this.props;
		const { textStyle } = styles;

		if (expanded) {
			return (
				<CardSection>
					<Text style={textStyle}>{library.description}</Text>
				</CardSection>
			);
		}
	}

	render() {

		const { titleStyle } = styles;
		const { id, title } = this.props.library;

		return (
			<TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
				<View>
					<CardSection>
						<Text style={titleStyle}>{title}</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
};

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15,
		marginTop: 10,
		marginBottom: 10,
		fontFamily: 'Gotham-Medium'
	},
	textStyle: {
		flex: 1,
		paddingLeft: 10,
		paddingRight: 10,
		fontFamily: 'Gotham-Book'
	}
};

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id;

	return { expanded };
}

export default connect(mapStateToProps, actions)(ListItem);