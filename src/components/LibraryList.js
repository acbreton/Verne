import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import ListItem from './ListItem';
import * as LibraryActions from '../actions/LibraryActions';

class LibraryList extends Component {
	componentWillMount() {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(this.props.libraries);
	}

	renderRow(library) {
		return <ListItem library={library}/>;
	}

	render() {
		return (
			<ListView
				dataSource={this.dataSource}
				renderRow={this.renderRow}/>
		)
	}
}

function mapStateToProps(state) {
    console.log('~~~ state ~~~');
    console.log(state.libraries);
    return {
        libraries: state.libraries
    };
}

function mapDispatchToProps(dispatch) {
    return {
        libraryActions: bindActionCreators(LibraryActions, dispatch),    
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LibraryList);